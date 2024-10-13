// class myuser {
//     constructor(username,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password} shubham`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const user1 = new myuser("Shubham",'SHubham@gmail.com','123456');
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


//  Behind the scene

function User(username,email,password) {
        this.username=username;
        this.email=email;
        this.password=password;
}
User.prototype.encryptPassword=function(){
    return `${this.password} shubham`;
}
User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`;
}
const user1 = new User("Shubham",'Shubham@gmail.com','123456');
console.log(user1.encryptPassword());
console.log(user1.changeUserName());