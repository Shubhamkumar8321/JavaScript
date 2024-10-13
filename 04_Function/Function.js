function myName(){
    const arr=new Array("Shubham")
    console.log(arr.toLocaleString());
    
}
// myName();

function add(num1,num2){
    console.log(num1+num2);
}
// add(4,3);


function addnum(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
const result=addnum(3,5);
// console.log(result);

function loginMessage(UserName){
    // if(UserName===undefined){
    //     console.log("Please enter user name"); 
    // }else{
    // return `${UserName} just logged in...`;
    // }
    if(!UserName){
        console.log("Please enter user name"); 
        return;
    }
    return `${UserName} just logged in...`;

}
// console.log(loginMessage("Shubham"));
// console.log(loginMessage());

// ================================================
function Addcart(...num){
    return num;
}
// console.log(Addcart(200,300,500));


// =====================================================

const User1={
    username:"Shubham",
    price:123,
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(User1)
handleObject({
    username:"KUMAR",
    price:"321"
})

const myarr=[492,374,343,829,846]
function secondvalue(getArray){
    return getArray[1]
}
console.log(secondvalue(myarr));
