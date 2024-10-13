// var a =300;  

 if (true) {
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
// console.log(b);
console.log(c);  // var doesnot prefer becouse it value can also use in globlely 
//so its not good for coding

// ======================================

function one(){
    const username="Shubham";
    function two(){
        const web="youtube";
        console.log(username);        
    }
    // console.log(web);
    two();
}
one();

if (true) {
    userme="Shubham";
    if (userme==="Shubham") {
        const website="Youtube";
        console.log(userme +" "+ website);
    }
    // console.log(website);
}
// console.log(userme);
