console.log("*****Step1*****");
function stringHandsOn(){
var a = " Hey you are doing good,  keep it up";
console.log(a);
console.log("*****Step2*****");
  console.log(a.length);// length.
  console.log("*****Step3*****");
  var b = a.trim();//trim.
  console.log(b);
  console.log("After removing space: ",b.length);
  console.log("*****Step4*****");
  var count = a.length-b.length; //count.
  console.log(count);
  console.log("*****Step5*****");
  var firstChar = b.charAt(0);
  console.log("The first Character After Trim is:  ",firstChar);//print_first_char.
  
  var lastChar = b.charAt(b.length-1);
  console.log("The Last Character After Trim is:  ",lastChar);//Print_last_char.
  console.log("*****Step6*****");
   var d = b.split(" ");
   console.log("Totalwords are after step 3 is:  ",d.length);//totalWords avil_after_step3.
   console.log("*****Step7*****");
   var e = a.indexOf('good')
   console.log("The index of good are:"   ,e);//index word of string good.
   console.log("*****Step8*****");
    var f = a .substring(22);
    console.log("Using Substring:"  ,f);//substring index of 22.
    console.log("*****Step9*****");
 var g = a.slice(22);
 console.log("Using Slice:"  ,g);// slice index of 22.
 console.log("*****Step10*****");
   var h = b.endsWith('up');
   console.log(" ends with up is:  "  ,h);// ends with 'up'.
   console.log("*****Step11*****");
   var i = b.startsWith('Hey');
   console.log("Start with Hey:  "  ,i);// start with hey.
}stringHandsOn();





