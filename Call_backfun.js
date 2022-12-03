/*
function call_backfun(a,b)
{
    console.log(a+b);
}

function mainfun(name)
{
    console.log(" I am Main function");
    name(10,20);
    

}

mainfun(call_backfun);
*/

// Function returning function

function myreturnfun()
{
    function Hello()
    {
        console.log("return");
    }
    return Hello;

}
const ans=myreturnfun();
console.log(ans());
