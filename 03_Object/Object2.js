const User={};
User.id="123BBC";
User.name="Sanu";
User.login=false;

// console.log(User);
const regualUser={
    Email:"sanu@gmail.com",
    FullName:{
        UserFullName:{
            FirstName:"Shubham",
            lastName:"Kumar"
        }
    },
    age:23,
    LogIn:true
};
// console.log(regualUser.FullName);
const obj1={1:'A',2:'B'};
const obj2={3:'C',4:'D'};
const obj3=Object.assign({},obj1,obj2) //we can defined both method
const obj4={...obj1,...obj2}
// console.log(obj3);
// console.log(obj4);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));
// console.log(User.hasOwnProperty('login'));
// console.log(User.hasOwnProperty('log'));


// ==========================

const course={
  courseName:"Javascript",
  price:199,
  courseInstructor:"Ramesh"
}
// const {courseInstructor}=course;
// console.log(courseInstructor);
const {courseInstructor:cit}=course;
console.log(cit);