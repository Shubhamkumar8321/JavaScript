const userEmail="Shubham@gmail.com";
if (userEmail) {
   console.log("Got user Email");
}else{
    console.log("Don't have user Email");
    
}
//  falsy Value=> false,0,-0,BigInt,"",null,undefined,NaN
// thuthy Value=> " ",'0','false',{},[],function(){}
const userEmai=[];
if (userEmai.length===0) {
    console.log("Array is Empty");
}

const Objempty={}
if (Object.keys(Objempty).length===0) {
    console.log("Empty Object");
}

// Ternairy operator
// condition ? true:false

const iecPrice=100;
iecPrice<=80?console.log("Less then 80"):console.log("more then 80");