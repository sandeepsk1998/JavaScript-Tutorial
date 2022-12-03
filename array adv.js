// Important array methods(for each, map, reduce)
/*
const a=[2,4,6,7,8];

function mul(index,a)
{
    console.log("number is" + " "+ 3*a+ " " + "index is "+ " "+ index);
    
}
for(let i=0;i<a.length;i++)
{
    mul(i,a[i]);

}
*/
// same thing using for each 
const a=[2,4,6,7,8];


/*
function mul(ab,index)
{
    console.log(index + " " + 3*ab);
    
}
a.forEach(mul);

*/
/*

a.forEach(function(number,index){
    console.log(3*number + " "+index);
});
*/
const users=[{fname:"Sandeep",age:23},
{  fname:"Arti",age:20},
{  fname:"Maa",age:50}
]
/*
users.forEach(function(users)
{
    console.log(users.fname);
})
*/
/*
users.forEach((user)=>
{
    console.log(user.fname);
})
*/

/*
for(let i of users)
{
    console.log(i.age);
}
for(let i=0;i<users.length;i++)
    {
console.log(users[i].fname);
    }
    */


    ///// MAp Method
    /*
    num=[2,3,4,5,6,7];
 const sq=function(number)
 {
    return number *number;
 }
   const numsq= num.map(sq);
   console.log(numsq);

*/

   const usersname=users.map((emp)=>
   {
    return emp.fname;
   });
   console.log(usersname);



   ///