// Date

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate=new Date(2023,0,23)   // month start from 0 ie. JAN
let myCreatedDate=new Date("07-29-2025")   // month start from 0 ie. JAN
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

// `${newDate.gtDay()} and the time is`

newDate.toLocaleString('default',{
    weekday:"long"
})