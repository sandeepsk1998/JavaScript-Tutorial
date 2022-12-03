

/*const nums=[1,2,3,4,5,6];

const isEven=function(nums)
{
    return nums%2===0;
}

const evennum =nums.filter(isEven);
console.log(evennum);

*/

// Reduce Method

const arr=[1,2,3,4,5];

// aim= sum of all numbers
const sum=arr.reduce((accumulator,current_value)=>{
    return accumulator +current_value;

});
console.log(sum);