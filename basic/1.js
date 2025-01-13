console.log("saju")

const accid = 123
let accname = "shivansh"
var accpass = "shiv" // we do not use var type variable now a days rather we use let variable
city = "dehradun"

/*
we do not use var because of issue in block scope or functional scope which is these bracket => {}
    used in for loop and etc
*/
// use this 
console.log(accid)
console.log(accname)
console.log(accpass)
console.log(city)

// or use this (efficient)

console.table([accid , accname , accpass , city])