// Factorial of a number 

n = 5 
factorial = 1

// 5 * 4 * 3 * 2 * 1 

for(i=n; i >0; i--){
    factorial = factorial * i 
    // factorial *= i 
}
console.log("Factorial of ", n , " is ", factorial)


//        n.   i.   factorial 
// 1st    5.   5.   factorial = 1 *5 = 5
// 2nd    5.   4.   factorial = 5 *4 = 20
// 3rd    5.   3.   factorial = 20 *3 = 60
// 4th    5.   2.   factorial = 60 *2 = 120
// 5th.   5.   1    factorial = 120 * 1= 120
// 6th    5.   0.   


// find even numbers from 1 to 20 

for(i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// sum of digits  
n = 12345 
sum = 0

do{
  digit = n % 10
  console.log(digit)
  sum += digit 
  n = Math.floor(n / 10)
  console.log(n)
}while(n>0)

console.log(sum)

for(i=1; i<=50; i++){
    if(i % 3 == 0 && i % 5 ==0){
        console.log("FizzBuzz")
    }else if(i % 5 == 0){
        console.log("Buzz")
    }else if(i % 3 == 0){
        console.log("Fizz")
    }else{
    console.log(i)
    }
}

// num % i == 0
// 1 
// 2 3 5 7 11 13 17 19 23 29
// 4 6 8 9 10 12 14 15 16 18 20 21 22 24 25 26 27 28