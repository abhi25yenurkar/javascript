
var greet="Good Morning";
console.log(typeof greet);

console.log("Total no of characters available into string variable - greet ");
 var greetLength = greet.length;// we use assignment operator

 console.log(greetLength);// purna length mogate.


console.log("Find the character by index value");
 var charAtIndex3 = greet.charAt(3);// 3 position var konta character pahije
 console.log("Character available at index 3 is",charAtIndex3);


 console.log("Find the last character");
 var charAtLastIndex = greet.charAt(greetLength-1);
 console.log("Last char is",charAtLastIndex);


console.log("Find the index by character values");
 var indexOfM = greet.indexOf( 'M' );
 console.log("Index of char M is",indexOfM);


 console.log("Index of char which is not available into the string: ", greet.indexOf('z'));


 console.log("Index of o char: ", greet.indexOf('o'));
 console.log("Index of o char using lastIndexOf(): ", greet.lastIndexOf('o'));

 var replaceResult = greet.replace("Morning","Evening");
 console.log(replaceResult);
 console.log(greet);


 console.log("Upper Case",replaceResult.toUpperCase());
 console.log("Lower Case",replaceResult.toLowerCase());



 var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);



//  var count = myName.length-myNameAfterTrim.length;
//  console.log(count);

//  console.log(myName.trimStart(),myName.);



 console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));



// slice method. kapne

console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));



console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log(typeof splitResult);
console.log("Total words:",splitResult.length);



var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";


var friendList = myFriendList .split(",");
var gfriendList=myFriendList .split(" ");
console.log("total no:",friendList.length);
console.log("total words:",gfriendList.length);
