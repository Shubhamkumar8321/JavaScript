// const coding=["js","cpp","java","ruby","c","python"]
// const value=coding.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(value);

const num=[1,2,3,4,5,6,7]
// const newNum=num.filter((mynum)=>mynum>3);
const newNum=num.filter((mynum)=>{
    return mynum>2
})
// console.log(newNum);

const number=[]
num.forEach((mynum)=>{
    if (mynum>4) {
        number.push(mynum);
    }
})
console.log(number);
