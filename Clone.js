// clone using object


const obj1={
  key1 :"value1",
  key2:"Value2"
}

  
  
// const obj2={...obj1};


const obj2=Object.assign({}, obj1)
  // cloning can be done by this way too

  const obj3=Object.assign({},obj1, obj2)


obj1.key3="value3"
console.log(obj1);
console.log(obj2);
console.log(obj3)


