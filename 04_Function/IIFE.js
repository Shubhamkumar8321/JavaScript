// Immediately  Invoked function Expressions(IIFE)

(function chai(){
    console.log(`DB Connected`);
    
})();

((name)=>{
   console.log(`DB coonection SuccessFull ${name}`);
   
})("Kumar Gupta")