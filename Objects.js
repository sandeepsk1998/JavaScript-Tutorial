// Intro to objects
 // how to create objects
// key value pair
const person={ name: "Sandeep"
, age: 24,
Hobbies:["sleeping","movies"]
} // obj literal

person.gender="Male";

/*console.log(person);
//console.log(person.name);
console.log(person.Hobbies);
console.log(person.gender); // ham data access kar skte h using . operATOR
*/
/*
console.log(person["age"])
person["Favorite"]="Arti";
console.log(person["Favorite"]);
*/

/*

const key="Email";
const person1={ name: "Sandeep",
 age: 24,
"person1 Hobbies":["sleeping","movies"] // is tarike ke ham "" use krte h
};
console.log(person1["person1 Hobbies"]);

person1[key]="sandeep09522@gmail.com";
 console.log(person1)

 */

/*
 for(let index  in person)
{
    console.log(index,person[index]);
}
*/

//console.log(Object.keys(person));
/*
for(let key of Object.keys(person))
{
    console.log(person[key]);
}
*/

/// computed properties

const key1="obj1";
const key2="obj2";
const val1="val1";
const val2="val2";
const obj={ [key1]:val1,
    [key2]:val2
};
console.log(obj);

//SPREAD OPERATOR
const o1={a1:"Sandeep", b1: "Kumar"}
const o2={a2:"Sandeep", b2: "Kumar"}
const o3={...o1,...o2};
console.log(o3)
const o4={ ..."abcdefghijklmnopqrstuvwxyz"};
console.log(o4[16]);

// Object restructure
const car={
          Audi: 2000000,
          bmw:300000,
          tata:4000,
          honda:8000
};
/*const var1=car.Audi;
const var2=car.bmw;
console.log(var1, var2); 
*/
// normal

// destructure
const {Audi,bmw,...restProps}=car;
console.log(restProps);
