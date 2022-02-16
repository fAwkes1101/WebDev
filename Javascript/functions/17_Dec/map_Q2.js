//income < 100 then make it twice using maps


let member =[{g : "m", ages:20, income: 200}, {g: "f", ages: 25, income:70}]

let result = member.map(incomes);

function incomes(elem){  //elem is receiving address of objects from member, so direct change may cause changes in the original array/object
    let emptyObj = {...elem}; // this will make a copy of elem object in emptyObj changes in it will not effect the original object jo array me padaa hai
  
    if( elem.income<100){
      return 2*elem.income;
  }
  return elem.income;
}
console.log(result);
console.log(member);
