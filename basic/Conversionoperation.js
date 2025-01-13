let score = "saju"
// let score = "33"
// let score = "33asd"
// let score = "true"
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// "33" => 33
// "33asd" => NaN  (not a nnumber)
// "true" => 1 , false => 0

let isLoggedIn = "saju"
// let isLoggedIn = 1
// let isLoggedIn = ""

let booleanIsLoggesIn = Boolean(isLoggedIn)
console.log(booleanIsLoggesIn);

// 1 => true , 0 => false
// "" => false
// saju => true

let someNumber = 7

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ************************************operation*******************************************

let value = 5
let negValue = -value
console.log(negValue);

let str1 = "hey"
let str2 = " saju"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((1 + 2) * 5 % 3);

console.log(+true);    // + sign is used for conversion but use nahi karna chahiye
console.log(true);   
console.log("");   
console.log(+"");

let a = 100
a++;           
console.log(a);   // patani kese kaam kar raha hai
++a;
console.log(a);



