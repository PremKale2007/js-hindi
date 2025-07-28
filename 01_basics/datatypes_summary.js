// # Primitive

// 7 types:String,Number,Boolean,Null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3


const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=36873656564687437n



// Reference (Non primitive)
//Array,Objects,Functions

const heros=["shaktiman","naagra","doga"]
{
    name="prem",
    age=22
}


const myFunction=function(){
    console.log("Hello World");  
}


console.log(typeof bigNumber);
console.log(typeof myFunction);



//*******************************MEMORY*********************************

//  Stack (Primitive), Heap(Non-primitive)

let myYoutubeName="premkale.com"

let anothername=myYoutubeName
anothername="chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);


let userOne={
    email:"user@gmail.com",
    upi:"user@abc"

}
let userTwo=userOne

userTwo.email="hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
