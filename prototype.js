function hello()
{
    console.log("hello World");
}

//const hello=["value1 ","value2"];

// javascipt function=fun +obj

//console.log(hello.name);
hello.myOwnProperty="very unique value";
console.log(hello.myOwnProperty);

// 
console.log(hello.prototype);
if(hello.prototype)
{
    console.log("prottype is present");
}
else
{
    console.log("prottype is not present");
}

hello.prototype.abc="abc";
hello.prototype.xyz="asyz";
hello.prototype.sing=function()
{
    console.log("la lal la");
}
console.log(hello.prototype.abc);
console.log(hello.prototype.sing());



//  USING OF PRTOTYPE

/*const person={
    fname:"Sandeep",
    lname:"Kumar",
    age:25,
    adderess: ["HNmber","Pincoe"],
    about: function()
     {
        return `${this.fname} age is ${this.age}`;

          },
          
    is18: function()
    {
     return this.age >=18
    } 
          
    }
    const aboutuser=person.about();
    console.log(aboutuser);
    */

// jab bhut sare users ke liye output chahiye tab funtion ka use kr skte h

//
//function
/*
function createfun(fname,lname,age,address)
{
    const person1={};
    person1.fname=fname;
    person1.lname=lname;
    person1.age=age;
    person1.address=address;
    person1.about=function() {
        return `${this.fname} age is ${this.age}`;

          };
    person1.is18=function() {
        return  this.age >=18;
    
            }      
    return person1;
    
}

const person2=createfun("Sandeep","Kumar",3,"100");
console.log(person2);
const k = person2.is18();
console.log(k);
*/
/*
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old. ${this.address}`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
*/

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
   // user.about=userMethods.about;
   // user.is18=userMethods.is18;
   // user.sing=userMethods.sing;
    return user;
}
createUser.prototype.about= function()
{
    return `${this.firstName} is ${this.age} years old. ${this.address}`};
    createUser.prototype.is18= function()  {
        return this.age >= 18;
    };
    createUser.prototype.sing= function()
    {
        return 'toon na na na la la ';
    }

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "Lucknow");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user2.about());
//console.log(user2.is18());
//console.log(user3.sing());



