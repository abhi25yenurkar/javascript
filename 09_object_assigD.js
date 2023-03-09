let professor = {

    pName : "Rahul",
    lastName : "Acharya",
    age : 45,                                               // object
    collageName : "Y.c.c.e",
    address : "Nagpur",


  degree :{
    engineering : "Csc",
     phd : "Adv Computing ",                                // Nested object.
     mTek : "Cad-cam",
     diploma : "electrical",
  },


  certificates:[ "Hacker Rank Particiption","Certificates in IFE course","certificate in Adv Programming"  ],//addArray inobject.



     totalDegrees :  function(){

            this.degree

            return `Professor degrees are Engineering in: ${this.degree.engineering}, and Phd in: ${this.degree.phd}, and M-tek in: ${this.degree.mTek}, and Diploma in: ${this.degree.diploma}`// function with return.
        }

};

console.log("******* STEP 1 *******");

console.log(professor);



console.log("******* STEP 2 *******");

console.log(professor.degree);




console.log("******* STEP 3 *******");

console.log(professor.certificates);





console.log("******* STEP 4 *******");

let degreeResults = professor.totalDegrees();  // return function call

  console.log(degreeResults);





  console.log("******* STEP 5 *******");


professor.workExperience = "14 Years."; // add new property after creating an object

  console.log(` Total work Experience is:  ${professor.workExperience}`);



  console.log("******* STEP 6 *******");

  professor.age = 51;

  console.log( "The modify property is age:", professor.age);
  console.log(professor);


  console.log("******* STEP 7 *******");

  professor.certificates.push("Oracle Certifide");

console.log(professor.certificates);


console.log("******* STEP 8 *******");

console.log(professor.certificates[professor.certificates.length-1]);

// or BY USING SLICE METHOD. console.log(professor.certificates.slice(3));