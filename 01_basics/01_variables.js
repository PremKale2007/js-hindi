const accountId=144553
let accountEmail="premkale@gmail.com"
var accounntPassword="12345"
accountCity="jaipur"
let accountState;


// accountId=2    not allowed


accountEmail="abcd@.com"
accounntPassword="21212121"
accountCity="Banglore"

/*
Prefer not to use var
because of issue in block scope and functional scope ie.{}

*/
console.log(accountId);

console.table([accountId,accountEmail,accounntPassword,accountCity,accountState])