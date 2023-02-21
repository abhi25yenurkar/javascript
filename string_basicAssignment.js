var hobby1="Cricket";
var hobby2="Reading";
var hobby3="Singing.";

function stringBasics(){
    console.log("My dream Company is: TCS ");
    console.log("My Hobbies are: ",hobby1,",",hobby2,",",hobby3);
    var a = hobby1.length;
    var b = hobby2.length;
    var c = hobby3.length;
    console.log("Total no of char in hobby1 is:  ",hobby1.length);
    console.log("Total no of char in hobby2 is:  ",hobby2.length);
    console.log("Total no of char in hobby3 is:  ",hobby3.length);
    var sum = a+b+c;
    console.log("The total number of character available is: ",sum);
}
stringBasics();