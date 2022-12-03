const obj1={

key1:"value1",
key2:"value2"    // ye dono proto h obj2 ke

}

const obj2=Object.create(obj1);

/*const obj2={
    key3: "value3"
}
*/
obj2.key3="value3";
// obj2.key2="unique";
console.log(obj2);
console.log(obj2.__proto__);
console.log([[prtotype]]);
            