// Sets are iterable

const nums= new Set();
nums.add(1);
nums.add(2);
nums.add(["Sandeep",'Kumar']);
nums.add("Kumar");
nums.add(6);
/*if(nums.has(1))
 {
    console.log("True");
 }
 */

 /*
console.log(nums);
for(let i of nums)
{
    console.log(i);
}
*/
const a=[1,2,3,4,3,2,1,8];
const unqiuelements= new Set(a);
console.log(unqiuelements);
let len=0;
for(let ele of unqiuelements)
{
    len++;
}
console.log(len);