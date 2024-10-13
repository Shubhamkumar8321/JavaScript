const Bollywood=["Salman","Sarukh","Akshay"];
const Bojpuri_Hero=["Pawan","Manoj","Ravi"];
// Bollywood.push(Bojpuri_Hero);
// console.log(Bollywood);
// console.log(Bollywood[3][2]);
// Bollywood.concat(Bojpuri_Hero);
// console.log(Bollywood);

// const All_Heros=Bollywood.concat(Bojpuri_Hero);
// const All_Heros=[...Bollywood,...Bojpuri_Hero]
// console.log(All_Heros);

const otherArr=[1,2,3,4,[3,4,5],6,7,[7,8,9,[8,9,10]]];
const real_otherArr=otherArr.flat(Infinity);
console.log(real_otherArr);
