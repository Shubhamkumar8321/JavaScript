const user={
    username:"Shubham",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username} , Welcome to website...`);
        console.log(this);
        
    }
}
// user.welcomemessage();
// user.username="Kumar";
// user.welcomemessage();
// console.log(this);
// ========================================


function chai(){
    console.log(this);
    
}
// chai();

// =======================================

const chaii=()=>{
    // let userrname="Sanny"
    // console.log(this.userrname);
    let userrname="Sanny"
    console.log(this);
    
}
// chaii();

// const Addd=(numm,numm2)=>{
//     return numm+numm2
// }
// console.log(Addd(3,5));
const Addd=(numm,numm2)=>(numm+numm2)
console.log(Addd(3,9));