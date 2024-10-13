const mysym=Symbol("Key1")
const obj={
    name:"Shubham",
    "Full Name":"Shubham Kumar",
    Age:22,
    [mysym]:"myKey2",
    Location:"Chanpatia",
    Email:"shubham@gmail.com",
    Isloggin:['Monday','Friday']
}
//  console.log(obj.Email);
// console.log(obj["Email"]);
// console.log(obj["Full Name"]);
// console.log(obj[mysym]);
// obj.Email="Shubham@iota.com";
// Object.freeze(obj)
// obj.Email="ShubhamKumar@gmail.com"
// console.log(obj);
obj.Greeting=function(){
    console.log("Hello JS User ");
}
obj.GreetingTwo=function(){
    console.log(`Hello JS User : ${this.name}`);
}
console.log(obj.Greeting());
console.log(obj.GreetingTwo());

