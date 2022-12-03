 /*
    const person2={
        fname:"Sandeep",
        age:24,
        about: function() {
            console.log(this);
              }
        }
        person.about();

        */

const person={
    fname:"Sandeep",
    age:24,
    about() {
        console.log(this.fname,this.age);
          }
    }
    person.about();

   