const arr=[1,2,3,4,5]

const initialval=0;
// const sum=arr.reduce((num,currval)=>num+currval,initialval);
// console.log(sum);
const arr1=[1,2,3,4]
const total=arr1.reduce(function(acc,curval){
    // console.log(`acc: ${acc} and curval : ${curval}`);
    return acc + curval
},0);
// console.log(total);


const ShoppingCart=[
{
    itemName:"Java Course",
    price: 299,
    Validity :" 3"
},
{
    itemName:"Javascript Course",
    price: 599,
    Validity :" 4 Months"
},
{
    itemName:"CPP Course",
    price: 200,
    Validity :" 2 Months"
},
]

const totalBudget=ShoppingCart.reduce((acc,item)=>{
    return acc + item.price;
},0)
console.log(totalBudget);
