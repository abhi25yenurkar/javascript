function expression(gradutionScore,hscScore,sscScore ,CandidateName){
    var result =(gradutionScore >=70 ||hscScore>=80 ||sscScore>90)? `Congrates ${CandidateName} you are eligiable for TCS interview`:`Unfortunately ${CandidateName} you are not eligiable for interview`;
    console.log(`${result}`);
}
expression(80,86,90,"Abhishek");
expression(70,65,55,"Akhil");
expression(60,79,88,"Ratan");