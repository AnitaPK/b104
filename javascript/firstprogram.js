console.log("Hello from terminal console")

// prompt()

/* 
                                var        let         const 
    re-declare / re-define      true      false.       false
    re-assign.                  true      true         false
    blockScope
    functionscope               true       false.       false
*/

var a = 10
a = "Rahul"
var a = true

function greet(){
    var a = 1000
    console.log(a)
}
console.log(a)
greet()
console.log(a)

let b = 100
b = "Rahul"
// let b = "hello"
console.log(b)

function greet1(){
    console.log(b)
    b = 999
    console.log(b)
}
greet1()
console.log(b)

const c = [1,2]
// c = "Rahul"
// const c = 999
c.push(3)
console.log(c)

function greet2(){
    console.log(c)
    // c = 200
    c.push(4)
    console.log(c)
}
greet2()
console.log(c)
console.log("--------------------------------")
// memory management 
// stack 
// reference 
// back memory 

p = [1,2]
q = p 
q.push(3)
console.log(p)
console.log(q)

// create by using new keyword 
// deep copy 
// shallo copy 