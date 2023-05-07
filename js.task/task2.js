// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
let num1 = 5;
let num2 = 8;

if (num1 > 10 && num2 > 10) {
  console.log("Both numbers are greater than 10");
} else {
  console.log("At least one number is not greater than 10");
}



// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
let username ="mohammad";
let password=1231315;
if(username=="mohammad" && password ==1231315 ){
    console.log("Accses grented")
}else{
    console.log("Accses denaled")
}


// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

let num=10;
if(num>=10&& num<=20 ){
    console.log("The number is between 10 and 20")
}else{
    console.log("The number is not between 10 and 20")
}



// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
let age =18;
let whether= true
if(age>=18&& whether==true ){
    console.log("You can drive")
}else{
    console.log("You cannot drive")

}


// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
let num3 =7;
let num4= 3
if(num3>10|| num4<0 ){
    console.log("Invalid number")
}else{
    console.log("Valid number")
}



// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
let num5 =7;
let num6= 3
if(num5>=5 && num5<=10 || num6>=20 && num6<=20  ){
    console.log("The number is valid")
}else{
    console.log("The number is not valid")
}


// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".

let password1= 12354345
if(password1== 12354345 || password1== "secret"  ){
    console.log("Access granted")
}else{
    console.log("Access denied")
}


// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
let num7= 50
if(num7>=0 && num5<=100 && num7%2==0   ){
    console.log("The number is even and between 0 and 100")
}else{
    console.log("The number is not even and/or not between 0 and 100")
}


// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
let num8= 50
let num9=-48
if(num7<0 || num5>0  ){
    console.log("At least one number is negative")
}else{
    console.log("Both numbers are positive")
}


// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
let age2= 14
let student=true
if(age2<=18&& student==true ){
    console.log("You qualify for a discount")
}else{
    console.log("You do not qualify for a discount")
}