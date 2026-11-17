// 1. Arithmetic Operators 
// addition + 
// Subtraction - 
// Multiplication * 
// Division / 
// modulus % 
// exponent ** 
a = 10 
b = 5 
console.log(a+b) //15
c = a + b
console.log(a-b) //5
console.log(a*b) //50
console.log(a/b) //2 
console.log(a%b)  // 10/5 //0

// a % 2 == 0 
console.log(b % 2) // 1 
console.log(a**2)  // 100 
console.log(b**3)  // 125


// 2. Assignment Operators

//   =
company = "Microsoft" 
p = 10 
p = p+5 
p += 5 
// -= 
p = p-1  
p-=1
// *= 
p = p * 5
p *= 5
// /= 
p = p / 5
p /= 5

// %=

p = p % 5
p %= 5

p +=1 
p++ // p = p+1
p -=1
p--  //p= p-1

// 3. Comparison Operators
console.log("Comparison Operators")
// == check only value
console.log(10 == 10) //true
console.log(10 == "10") //true
// ===  check value with datatype 
console.log(10 === 10) //true
console.log(10 === "10") //false

console.log(10 > 1) // true
console.log(10 >= 10) // true
// console.log(10 >== 10) // true

console.log(10 < 20) //true
console.log(10 <= 20) //true
// console.log(10 <== 20) //true
console.log(10 != 10) //false
console.log(10 !== 10) //false



// 4. Logical Operators
// and  &&
// age > 18 
// nationality == "Indian" 
// Rahul 15 UK            0.   0     = 0
// yash.   15.  Indian    0    1     = 0
// Jish. 20 UK            1.   0     = 0
// Sam 30 Indian          1.   1.    = 1

age > 18 && nationality == "Indian"

// or  || 
// Entry => 
//     party == samePartyMember / diffPartyMember
//     oposition = true / false

//     samePartyMember   oposition = false   1   1 = 1
//     samePartyMember   oposition = true    1   0 = 1
//     diffPartyMember   oposition = false.  0   1 = 1
//     diffPartyMember   oposition = true.   0  0 = 0


// not  ! 
// hungry 
// !hungry 


// 5. Operator Precedence

// ()
// /* 
// ** 
// +-
