const name="Shubham";
const Count=50;
console.log(`Hello my name is ${name} and count is ${Count}`); //this is modern way to write codes....

const GameName=new String ('Bubble-Game');//unother method to write string
console.log(GameName);

console.log(GameName.__proto__);

console.log(GameName.length);


console.log(GameName.toUpperCase());

const newString=GameName.slice(0,5);
console.log(newString);
const AnotherString=GameName.concat(5);
console.log(AnotherString);
const otherString=GameName.split('-');
console.log(otherString);
const StringOne="    Nice to meet you     "
console.log(StringOne);
console.log(StringOne.trim());

const newStringTwo=GameName.charAt(3);
console.log(newStringTwo);
