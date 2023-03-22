//using for each with arrow function and callback.




console.log("*******step 1*******");
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

arrayNumbers.forEach( ( currentValue,index ) => {
    console.log(`   Index no: ${index}  Elements: ${currentValue}`);
});


console.log("*******step2*******");

console.log("forEach to find positive number");
arrayNumbers.forEach(element => {
    if (element>=0) {
        console.log(element);
    }
});


console.log("*******step3*******");

let add =[];
arrayNumbers.forEach(element => {
    if (element<0) {
        add.push(element)
    }
});
console.log(add);



console.log("*******step4*******");


arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log(`Even no: ${element}`);
    }
});


console.log("*******step5*******");
let sum = 0;
arrayNumbers.forEach( (element) => {
    sum = sum + element;
});
console.log(`sum of array elements ${sum}`);




console.log("*******step6*******");



arrayNumbers.forEach((element, index) => {
    if (index%2==0) {
        console.log(`Even index value in array: ${element}`);
    }
});
