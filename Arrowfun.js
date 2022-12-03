// TThis keyword in arrow funtion take the surrounding value
// this arrow function me apne se 1 level upar lega

const person={
    fname:"Sandeep",
    age:24,
    about: ()=>{
        console.log(this)
        console.log(this.fname, this.age);
          }
    }
    person.about();