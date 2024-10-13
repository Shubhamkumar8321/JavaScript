const promiseOne=new Promise((resolve,reject)=>{
    // do an any async task
    // DB calls , Criptography, Network calls
    setTimeout(function(){
        // console.log("Async task completed...");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    // console.log('promise consumed');
    
})

new Promise((resolve,reject)=>{
    // console.log("Async task 2 complete...");
    resolve();
},1000).then(()=>{
    // console.log('promise 2 also completed.');
    
})


const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:'Shubham',Email:'Shubhamkumar83216@gmail.com'})
    }, 1000);
})
promiseThree.then((user)=>{
    // console.log(user);
    
})

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let Error=false;
        if (!Error) {
            resolve({userName:'Shubham',password:'12345'})
        }else{
            reject("ERROR Something went wrong")
        }
    }, 1000);
})

promiseFour.then((user)=>{
    // console.log(user);
    return user.userName;
}).then((userName)=>{
    // console.log(userName);
}).catch((Error)=>{
    // console.log(Error);
}).finally(()=>{
    // console.log("Finally resolve or reject the promise");
    
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let Error=false;
        if (!Error) {
            resolve({userName:'JavaScript',password:'12345'})
        }else{
            reject("ERROR JS went wrong")
        }
    }, 1000);
})
async function  consumedpromiseFive() {
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log("Error found");
    }   
}
// consumedpromiseFive();


// async function getAllUsers() {
//     try {
//         const responses=await fetch("https://jsonplaceholder.typicode.com/users");
//         const datas=await responses.json();
//         console.log(datas);
//     } catch (error) {
//         console.log("e: ",error);
//     }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((responses)=>{
    return responses.json();
})
.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})
