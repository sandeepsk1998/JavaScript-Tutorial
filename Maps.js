// Map is iterable
// store data in fashion

/*
const person= {

    fname:"Sandeep",
    age: 24,
1:"one" // hainstring hi
}
//console.log(person.fname);
for(let key in person)
{
    console.log(typeof key);
}

*/

const person=new Map();
person.set('fname', "Snadeep");
person.set('age', 87);
person.set(10, "ten");

/*
console.log(person.get('fname'));
console.log(person.keys());
for (let key of person.keys())
{
    console.log(key,typeof key);
}
*/
/*
for(let [key,value]of person)
{
    console.log(key, value);
}
*/

/*
const person1=new Map([['fname', "sandeep"],['lname',"Kuumar"]])
{
    console.log(person1.values());
}
*/

const person2 ={
    id:1,
    fname:"Harshit"
    }
    const userinfo= new Map()
    userinfo.set(person2,{ age:24,gender:"Male"})
    console.log(userinfo);
    console.log(person2.fname)
    console.log(userinfo.get(person2).gender89u1);