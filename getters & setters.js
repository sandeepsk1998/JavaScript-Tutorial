class Person{
constructor(fname,lname,age)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
}
 get fullName()
 {
    return `${this.fname} ${this.lname}`;
 }
 set fullName(fullName){

    const [fname,lname] = fullName.split(" ");
    this.fname=fname;
    this.lname=lname;
 }



}

const person= new Person('harshit', 'vashsith', 24);
person.fullName=("Sandeep kumar");

console.log(person.fullName);