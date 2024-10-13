const accountId=1;

let email="Shubham@gmail.com";

var accountPasswprd="12345678";

accountCity="Chanpatia";

let accountState;
/*
var is not use because of issue in block scope and 
functional scope
*/

console.log(accountId);
 
email="Kumar@gmail.com";

accountPasswprd="22334455";
accountCity="Noida";

console.table([accountId,email,accountPasswprd,accountCity,accountState])