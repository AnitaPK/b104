age = 10
nationality = "Indian"
if(age > 18 && nationality == "Indian"){
    console.log("You can apply for Driving Lience")
}else{
    console.log("You cant apply")
}

marks = -300
// marks < 35 FAIL
// marks >= 35  marks <60 PASS 
// marks >=60. marks<75.  PASS with SecondClass
// marks >= 75 PAss With FirstClass 
// marks >= 80.PASS with Disti
if(marks >=0 && marks<=100){
    if(marks <35){
        console.log("FAIL")
    }else if(marks >= 35 && marks < 60){
        console.log("PASS")
    }else if(marks >=60 && marks <75){
        console.log("PASS With SECOND CLASS")
    }else if(marks >= 75 && marks < 80){
        console.log("PASS with FIRST CLASS")
    }else {
        console.log("PASS With Disti")
    }
}else{
    console.log("Please Enter Valid Marks")
}   

const today = new Date()
console.log(today)
console.log(typeof today)
const day = today.getDay()
console.log(day)
console.log(today.getMonth())

switch (day){
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is Tuesday")
        break

    case 3:
        console.log("Today is Wendesday")
        break

    case 4:
        console.log("Today is Thursday")
        break

    case 5:
        console.log("Today is Friday")
        break

    case 6:
        console.log("HOLIDAY")
        break

    case 0:
        console.log("HOLIDAY")
        break

    default:
        console.log("Enter correct day")
}


// for(initialization, condition, increament/decreament){
//     repeat run this code
// }

// initialization
// while(condition){
// //     repeat run this code
// increament/decreament
// }


// initialization

// do{
// // //     repeat run this code
// increament/decreament
// }while(condition)

// 13 * 1 = 13
// 13 * 2 = 
// 13 * 3 =
// 13 * 4 = 
// 13 * 5 = 
// 13 * 6 = 
// 13 * 7 = 
// 13 * 8 = 
// 13 * 9 =
// 13 * 10 =  

for(i = 1; i<=10; i++){
    console.log("13  * ", i, " = ", 13 * i)
}

i = 1 
while(i<=10){
    console.log("13  * ", i, " = ", 13 * i)
    i++
}
i = 1
do{
    console.log("13  * ", i, " = ", 13 * i)
    i++
}while(i<=10)

// BMI = weight (kg) / height² (m²)
weight = 45
height = 1.525 
BMI = weight / (height * height)


if(BMI < 18.5){
    console.log("Underweight")
} else if(BMI >= 18.5 && BMI < 24.9){
    console.log("Normal weight")
} else if(BMI >= 25 && BMI < 29.9){
    console.log("Overweight")
}else{
    console.log("Obesity")
}



