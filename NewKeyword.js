// new keyword
function CreateUser(fname,age)
{
    
    this.fname=fname;
    this.age=age;
}

/*
new keyword
//1. creating empty object (this)
 2.return this
 */


/*
createUser.prototype.about=function ()
{
    console.log(this.fname,this.age);
}
const user1 =new createUser("Sandeep",23);
console.log(user1.about());
*/


function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
   // user.about=userMethods.about;
   // user.is18=userMethods.is18;
   // user.sing=userMethods.sing;
}
CreateUser.prototype.about= function()
{
    return `${this.firstName} is ${this.age} years old. ${this.address}`};
CreateUser.prototype.is18= function()  {
        return this.age >= 18;
    };
CreateUser.prototype.sing= function()
    {
        return 'toon na na na la la ';
    }

const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "Lucknow");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user2.about());
for(let key in user1)
{
   // console.log(key);
   if( user1.hasOwnProperty(key))
   { console.log(key);
   }
}