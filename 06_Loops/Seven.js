const mynum=[1,2,3,4,5,6,7,8,9]

// const Number =mynum.map((num)=>{
//     return num+10;
// })


const Numberr=mynum.map((num)=>num*10)
                .map((num)=>num+2)
                .filter((num)=>num>=50)
                
                   
console.log(Numberr);
