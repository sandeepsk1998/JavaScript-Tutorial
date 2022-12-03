// Clsures 

// When function return function;

// jab koi bhi function ke andar function retur krega tab ye apne lexical environ ment ke argument koe
//leke return hoga

// Inner fun outer func ki chije access kar skta h



/*
function pritFullName(fname,lname)
{
    function printName(fname,lname)
    {
        console.log(fname,lname);
    }

    return printName;
}

const ans = pritFullName("Sandeep" , "Kumar");
ans();
*/
function Hello(x)
{
    const a="varA"
    const b="varB"
    return function()
    {
        console.log(a,b,x);
    }
}

const ans = Hello("Sandeep")
ans();


function myfun(power)
{
    return function(num)
    {
        return num ** power
    }
}

const ans1=myfun(3);
const ans2=ans1(2);
console.log(ans2);