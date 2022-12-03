// Class Keyword // ES6//2015

// class are fake here

class CreateUser{
 constructor(firstName, lastName, email, age, address)
 {
    console.log("construtor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
 }
about()
{
    return `${this.firstName} is ${this.age} years old. ${this.address}`};

is18()
{
    return this.age >= 18;
}
sing()
{ 
    return 'toon na na na la la ';
}
func(a)
{
    console.log(a);
}

}
const user1 =new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 29, "Lucknow");
console.log(user1.firstName)
console.log(user1.sing());
// console.log(Object.getPrototypeOf(user1));
class Animal{
constructor(Name,age){

    this.Name=Name;
    this.age=age;
}
eat()
{
return `${this.Name} is Eating`;
}
isCute()
{
    return this.age === 3;
}
}
const animal1=new Animal("Cow",3);
console.log(animal1.eat());
console.log(animal1.isCute());

class Dog extends Animal{                       // inheritances`
 constructor(Name,age,speed){
    super(Name,age);
    this.speed=speed;
 }

 eat()
 {
    return `${this.Name} is Eating`;
 }
 run()
 {
    return `${this.Name} is running at ${this.speed}`;
 }

}

/*class Dog{
    constructor(Name,age){
    
        this.Name=Name;
        this.age=age;
    }
    eat()
    {
    return `${this.Name} is Eating`;
    }
    isCute()
    {
        return true;
    }
    }
    
    */
    const tommy=new Dog("Desi",1,45);
    console.log(tommy.eat());
    console.log(tommy.run());