const name="prem"
const repoCount=50

//console.log(name+repoCount+ "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('prem-pk-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

const newString=gameName.substring(0,4)
console.log(newString);


const anotherString=gameName.slice(-6,4)
console.log(anotherString);

const newStringOne="   prem   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://prem.com/prem%20kale"

console.log(url.replace('%20','_'));

console.log(url.includes('prem'));

console.log(gameName.split('-'));

