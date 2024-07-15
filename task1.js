/*Question 1: 
Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the 
multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".*/
/*
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
}*/

/*2.Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).*/
/*

function palindrome(x){
    let y=x.split("").reverse().join("");
    if(x==y)
        {
            console.log("Palindrome")
        }
        else{
            console.log("Not a palindrome")
        }
}
let x="maaam"
let m="Hello Everyone"
palindrome(x)
palindrome(m)
*/

/*3.Write a function that takes an array of numbers and returns the largest number.*/
let arr=[7,8,9,6,54,12,66,99,74]
function largest(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arr[i]
    }
    return max
}
console.log(largest(arr))

/*4.Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.*/
