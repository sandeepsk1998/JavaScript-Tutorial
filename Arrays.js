// array = ordered collection of same dat type;
//reference = array is object in js
let x=[3, 5 ,6,7];
// let obj={}; // obj literal
 /*x[2]=60; // mutable
console.log(x);
console.log(typeof x);
*/
/*console.log(typeof obj);
console.log(Array.isArray(x));
*/

//push & pop

x.push(70);    // push & pop are fast as compare to unshift & shift
console.log(x);
let c=x.pop(); // last se remove krta h
console.log(x);
console.log("popped element",c);


// abhi mere ko starting se push krnaha h

x.unshift(20);
console.log(x);
x.shift();
console.log(x);


// Primmmitive & reference type
let num1=6;
let num2=num1;  
console.log(num2);
num1++;
console.log(num1);
console.log(num2);

// Reference type me ham pointer se kaam krta h (but address same h to aise kaam krta h)
let a1=[3,5];
let a2=a1;
console.log(a1);
console.log(a2);
a1.push(4);
console.log(a1);
console.log(a2);

// how to clone array (copy kise banani h)
let arr1=[2,4,3,5];
//let arr2=arr1.slice(0).concat(70);
arr3=[3,4,5,5];
let arr2=[...arr1,...arr3]; // spread operator
console.log(arr1===arr2);
arr1.push(8);// numbers jab jyada hote h tab we cant do
 console.log(arr1);
 console.log(arr2);
 

 // for loop in array

 /*let array=[10,20,30,40,50];
  for(let i=0;i<array.length;i++)
  {
    console.log(array[i]);
  }
  */

  // use const for creating array

  // const piarr=[3.14,3,4,5]; // usi array ke address me hi kuch krunga no need to to create another array
  // piarr.push(34);
   // console.log(piarr);
// while loop
/*const array1=[10,20,30,40,50];
let i=0;
  while(i<array1.length)
  {
    console.log(array1[i]);
    i++;
  }*/

  const p1=["Sandeep","Kumar"];
  for(let index in p1)
   {
    console.log(p1[index].toUpperCase());
    }
   
    // array destructing

    const myarr=[3,4 ,57];
   /* let my1=myarr[0];
    let my2=myarr[1];
    console.log(my1);*/
    let [my1,my2]=myarr;
    let [...my3]=myarr
    console.log(my3);

