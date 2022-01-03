(function(){
    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divBreadCrumb = document.querySelector("#divBreadCrumb");
    let aRootPath = document.querySelector(".path");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let fid = -1;
    let cfid = -1;
    let folders = [];

    btnAddFolder.addEventListener("click", addFolder);
    aRootPath.addEventListener("click", navigateBreadcrumb);

    function addFolder(){
        let fname = prompt("Enter folder's name");
        if(!!fname){
            let fidx = folders.findIndex(f => f.name== fname);
            if(fidx =-1){
                fid++;
                folders.push({
                    id : fid,
                    name : fname,
                    pid : cfid
                });

                addFolderHTML(fname, fid, cfid);
                saveToStorage();


            }
            else{
                alert(fname + "already exists");
            }

        }else{
            alert("Please enter something");
        }

    }

    function editFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose = 'name']");
        let ofname = divName.innerHTML;

        let nfname = prompt("Enter new name");
      if(!!nfname){
        if(nfname!= ofname){
            let exists = folders.filter(f => f.pid == cfid).some( f=> f.name== nfname);
            if(exists==false){
            let folder = folders.filter(f => f.pid == cfid).find( f=> f.name== ofname);
            folder.name = nfname;
            
            divName.innerHTML = nfname;

            saveToStorage();
        }else{
            alert(nfname + "already exits");
        }}
        else{
            alert("old name, enter new");
        }}
        else{
            alert("please enter valid name");
        }

}
    function navigateBreadcrumb(){
        let fname = this.innerHTML;
        cfid = parseInt(this.getAttribute("fid"));

        divContainer.innerHTML ="";
        folders.filter(f => f.pid == cfid).forEach( f => {
            addFolderHTML(f.name, f.id, f.pid);
        });
        while(this.nextSibling){
            this.parentNode.removeChild(this.nextSibling);
        }
    }

    function deleteFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let fidtbd = divFolder.getAttribute("fid");

        let flag = confirm("Are you sure you want to delete " + divName.innerHTML + "?");
        if (flag == true) {
            let exists = folders.some( f => f.pid == fidtbd);
            if(exists==false){

            let fidx = folders.findIndex(f=> f.id == fidtbd);
            folders.splice(fidx, 1);

            // html
            divContainer.removeChild(divFolder);

            // storage
            saveToStorage();}
            else{
                alert("Can't delete, has childrens!")
            }
        }
    }
    function viewFolder(){
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose ='name']");
        cfid = parseInt(divFolder.getAttribute("fid"));

        let aPathTemplate = pageTemplates.content.querySelector(".path");
        let aPath = document.importNode(aPathTemplate, true);
       
        aPath.innerHTML = divName.innerHTML;
        aPath.setAttribute("fid", cfid);
        aPath.addEventListener("click", navigateBreadcrumb);
        divBreadCrumb.appendChild(aPath);

        divContainer.innerHTML = "";
        folders.filter(f => f.pid == cfid).forEach( f => {
            addFolderHTML(f.name, f.id, f.pid);
        });

    }
    function addFolderHTML(fname, fid, pid){
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        
        let divFolder = document.importNode(divFolderTemplate , true);

      
        let spanEdit = divFolder.querySelector("[action='edit']");
        let spanDelete = divFolder.querySelector("[action='delete']");
        let spanView = divFolder.querySelector("[action='view']")
        let divName = divFolder.querySelector("[purpose='name']");

        divFolder.setAttribute("fid", fid);
        divFolder.setAttribute("pid", pid);
        divName.innerHTML = fname;
        spanDelete.addEventListener("click", deleteFolder);
        spanEdit.addEventListener("click", editFolder);
        spanView.addEventListener("click", viewFolder);

        divContainer.appendChild(divFolder);
    }

    function saveToStorage(){
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }

    function loadFromStorage() {
        let fjson = localStorage.getItem("data");
        if (!!fjson) {
            folders = JSON.parse(fjson);
            folders.forEach(f => {
                if (f.id > fid) {
                    fid = f.id;
                }
             if(pid== cfid){
                addFolderHTML(f.name, f.id, cfid); //cfid
             }
            });
        }
    }

    loadFromStorage();
})();