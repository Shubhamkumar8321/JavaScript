// for of

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);   
}

const Greating="Hello World";
for(let Great of Greating) {
//   console.log(`Value of Graet is ${Great}`);
  
}

const map1=new Map();
map1.set("IN","India")
map1.set("FR","France")
map1.set("BAN","Bangladesh")
// console.log(map1);
for (const [key,value] of map1) {
    console.log(`${key} - ${value}`);
    
}
