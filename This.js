
const person={
    fname:"Sandeep",
    age:24,
    about: function() {
        console.log(this.fname,this.age);
          }
    }
    const fun=person.about.bind(person);
    fun();
