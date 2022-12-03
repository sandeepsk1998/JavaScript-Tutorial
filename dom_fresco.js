/*function myFunction()
{

    document.getElementById("btn").style.color='blue';

}
*/

 /*function myFunction()
{

   const p1= document.getElementsByTagName("p");
   p1[0].style.color="red";

}*/

let btn=document.getElementById("btn");
btn.addEventListener('click',function(){

    alert("clicked");
});

btn.addEventListener('mouseover',function(){
    console.log("clicked activated");

});

btn.addEventListener('mouseover',function(){

    console.log("mouse over is activated");
    });
    btn.addEventListener('mouseout',function(){

        console.log("mouse out is activated");
        });
    
