// What is Methods
/*
const person={
fname:"Sandeep",
age:24,
about: function() {
    console.log(this);
      }
}
person.about();

*/

/*
const person={
    fname:"Sandeep",
    age:24,
    about: function() {
        console.log(`person name is ${this.fname} and age is ${this.age}`);
          }
    }
    person.about();

    */

function personinfo()
{
    console.log(`person name is ${this.fname} and age is ${this.age}`);
}

const person1={
    fname:"Sandeep",
    age:24,
    about: personinfo
          }
 const person2={
        fname:"Mohit",
        age:14,
        about: personinfo
                  }
 const person={
    fname:"Arti",
    age:20,
    about: personinfo
          }
    
person1.about();
person2.about();
person.about();



function myfun()
{
    "use strict"    // for not fetting window object
    console.log(this);
}
myfun();



// CALL

/*

function hello()
{
    console.log("hello world");

}

hello.call();

*/

function about(hobby,favsinger)
{
   console.log(this.fname , this.age,hobby,favsinger);
     }

const user={
    fname:"Sandeep",
    age:24,
  /*
   about:personinfon(hobby,favsinger)
    {
       console.log(this.fname , this.age,hobby,favsinger);
         }
     }

     */
}
    const user1={
        fname:"Arti",
        age:20
    }

    const user2={
        fname:"Mohit",
        age:24
    }

    about.call(user,"cricket", "Lata");


    // APPLY

    about.apply(user1,["guitar", " rafi"]);


    // Bind

    const fun=about.bind(user2,"violin", "tansen");
    fun();
