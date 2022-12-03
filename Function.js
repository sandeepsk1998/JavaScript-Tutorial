
/*function sum(p,q ) // p,q are parameter
{
    return p+q;
}
const v=sum(20,10); // 8, 9 are argument
console.log(v);
*/
/*function evenodd(p ) // p,q are parameter
{
    if(p%2==0)  // or return p%2===0;
     return true;
    return false; 
}
const v=evenodd(39); // 8, 9 are argument
console.log(v);
*/

/*function sum(p ) // p,q are parameter
{
    return p[0];
}
const v=sum("Sandeep"); // 8, 9 are argument
console.log(v);
*/

/*
function array(p, n ) // p,q are parameter
{
   for(let i=0;i<p.length;i++)
   {
    if(p[i]==n)
     return i;
   }
   return -1;
}
const v=array([1,4,5,6,3],10); // 8, 9 are argument
console.log(v);
*/



// Funtion Expression;
/*
let function_expression=function(p, n ) 
{
   for(let i=0;i<p.length;i++)
   {
    if(p[i]==n)
     return i;
   }
   return -1;
}
const k=function_expression([1,4,5,6,3],1);
console.log(k);
*/


/// Arrow Funtions=

let arrowfun=(p,q) => 
{
    return p+q;
}
const v=arrowfun(20,10);
console.log(v);

let arrowfun1=(p, n )=> 
{
   for(let i=0;i<p.length;i++)
   {
    if(p[i]==n)
     return i;
   }
   return -1;
}
const k=arrowfun1([1,4,5,6,3],1);
console.log(k);


// Hoisting

/*
hello();

function hello()
{
  console.log("Hello World");
} */

// Function inside funtion

/*
const app=() =>
{
    const myfun=() =>
    {
        console.log("Hello Duniya");
    }
    console.log("Hello World");
    myfun();
}
app();

*/


// LAXIAL SCOPE
 function myapp()
{
    const myvar="Hello There";
    function myfun()
    {
        const myfun2=()=>
        {
         console.log("inside that fun2",myvar);
        }
    console.log("inside my function");
    const myvar="Value 60";
    console.log(myvar);
    myfun2();
    }
    console.log(myvar);
        myfun();
    
}
myapp();


// BLOCK VS FUNCTION SCOPE

// BLOCK scope

/*
{
    let fname="Sandeep" // const & let block ke bahar op nhi dega but VAR bahar output de dega
}
console.log(fname); */


{
    var lname="kumar" 
}

console.log(lname);

// let & const re block scope & VAR is function scope


/*function myblock()
{
    if(true)
        {
           let name="Sandeep Kumar";
           
        }
    console.log(name);
}
myblock();
*/

// Dfault parameters

function Add(a,b=0)
{
     return (a+b);
}
let n = Add(7);
console.log(n);


// rest parameters

/*
function rest_function(a,b,...c)
{
   let total=0;
   console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    for(let i=0;i<c.length;i++)
    {
        total=total+c[i] ;
    }

    console.log(a+b+total);

}
rest_function(1,2,3,4,5,6,7);
*/

// Parameter destructuring

/*
const person={
    name:"Sandeep",
    gender:"Male"
}
function printdetails(obj)
{
    console.log(obj.name);
    console.log(obj.gender);

}
printdetails(person);
*/

/*
const person={
    name:"Sandeep",
    gender:"Male"
}
function printdetails({name,gender})
{
    console.log(name);
    console.log(gender);

}
printdetails(person);
*/

