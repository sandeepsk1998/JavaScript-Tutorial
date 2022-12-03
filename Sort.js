// Sort Method
// ASCII TAbBLE
// Character

// Sort
const str=["Sandeep","Arti", "Rohit"];
str.sort();
console.log(str);

const nums=[4,5,2,76,9,70];
nums.sort((a,b)=>
{
  return a-b;
});
console.log(nums);

const product=[
               {pId:64,pname:"p1", price: 200},
               {pId:60,pname:"p2", price: 300},
               {pId:34,pname:"p3", price: 100},
               {pId:14,pname:"p4", price: 50},
               {pId:44,pname:"p5", price: 20}
];
// low to high

const lowtohigh=product.slice(0).sort((a,b)=>{
return a.price - b.price;
});
console.log(lowtohigh);


// find Method



//function isLength(string)
//{
    //return string.length === 4;
//}
// const p=isLength("Horse");
// console.log(p);
/*
const str1=["Sandeep","Arti", "Rohit"];

const ans=str1.find((string)=>
string.length===5);
console.log(ans);

*/
/*
const users=[
      {userId:3, userName: "Sandeep"},
      {userId:43, userName: "xyz"},
      {userId:8, userName: "Mohan"},
      {userId:30, userName: "Ashwini"},

];
const userdetails=users.find((user) => user.userId===43)
console.log(userdetails);
*/


//// Every Method

const numbers=[30,3,20,60,76];
const f=numbers.every((number)=> number%2===0)
console.log(f);

// some Method
// kya ek bhi number aisa h jo odd h

const g=numbers.some((number)=> number%2 !==0)
console.log(g);

const users=[
    {userId:3, userName: "Sandeep"},
    {userId:43, userName: "xyz"},
    {userId:8, userName: "Mohan"},
    {userId:30, userName: "Ashwini"},

];

const j=users.some((call)=> call.userId < 2 )
console.log(j);

// fill Method

const myArray= new Array(10).fill(1);
console.log(myArray);
myArray.fill(0,2,6);
console.log(myArray);

// splice

myArray.splice(1,4)
console.log(myArray);

myArray.splice(1,0,100);
console.log(myArray);

// insert delete & insert
myArray.splice(1,2,"insert 1","insert 2");
{
    console.log(myArray);
}

// iterables = jis pe ham for of loop lga pau

const fname=['Sandeep',"Harshit"];
 for(let char of fname)
 {
    console.log(char);
 }

 for(let user of users)
 {
    console.log(user);
 }

 // Array like object length +index se bhi access hona chahiye

 const firstname="Sandeep";
 console.log(firstname[2]);
 