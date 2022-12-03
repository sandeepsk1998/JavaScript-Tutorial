// Objects inside array
const emp=[
        {name:"Sandeep",id:64,Salary:50},
        {name:"Arti",id:65,   Salary:40}
]
/*for(let index of emp)
 {console.log(index);
}
*/
const [{name},{Salary}]=emp;
console.log(name);
console.log(Salary);