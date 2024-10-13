// For Loop
const array=new Array(1,2,3,4,5,6,7,8,9)
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
    
}


for (let i = 1; i < 5; i++) {
    // console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and Outer Loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
 }

//  Break and Continue
for (let i = 1; i <=10; i++) {
    if (i==5) {
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of i is : ${i}`);
}
for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is : ${i}`);
}