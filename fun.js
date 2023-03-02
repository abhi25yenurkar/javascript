

// function with no argument and no return value.
function showFullName(){
console.log("MY full Name is: Abhishek YEnurkar");

}
showFullName();    // function call or function invoketion.





// function with argument no return value

function showAge(age){
console.log("my age is",age);

}
showAge(25);




//no argument and return value.

function fullName(){
    var name = "Abhishek Yenurkar";
    return name;
}
var fName = fullName ();
console.log(fName);


// with argument return value.
function sumOfNumbers(num1,num2,num3){
    var result =num1+num2+num3;
    return sumOfNumbers;

}
var sumResult = sumOfNumbers(10,45,79);
console.log(sumResult);



// sir
var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1= "Akshay";
var name2 = "Sachin";





// sir

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }

  var swapResult = swapVariables(num1, num2); // Function call or Function invoke
  console.log(swapResult);
  
  var swapResult2 =  swapVariables(str1, str2);
  console.log(swapResult2);





