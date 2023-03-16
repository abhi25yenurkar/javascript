// 11_SetObjectAssignment.js
console.log("*******1 Object created using class *******");
class Bank {
bankName
location
accountNo                                              //        class
ifsc
interestRate

constructor(bankName,location,accountNo,ifsc,interestRate){

this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;                                          // constructor
this.ifsc=ifsc;
this.interestRate=interestRate;

}


}
const axis_bank =  new Bank("AXIS BANK","Nagpur",123456,"AX586","8%");           // object
console.log(axis_bank);
const sbi_bank =  new Bank("SBI BANK","Hingna",23456656,"SB586","4%");
console.log(sbi_bank);
const icici_bank =  new Bank("ICICI BANK","Raipur",8645665,"IC586","6%");
console.log(icici_bank);
const kotak_bank =  new Bank("KOTAK BANK","Trimurti Nagar",65647555,"IC586","7.5%");
console.log(kotak_bank);
const hdfc_bank =  new Bank("HDFC BANK","Kingsway",9547555,"HD586","8.5%");
console.log(hdfc_bank);
const punjab_bank =  new Bank("PUNJAB BANK","Burdi",454543456,"PU586","4.5%");
console.log(punjab_bank);








console.log(`*******2 add object into set *******`);
// add object in set and iterate
const setOfbanks = new Set();
setOfbanks.add(axis_bank);
setOfbanks.add(sbi_bank);
setOfbanks.add(icici_bank);
setOfbanks.add(kotak_bank);
setOfbanks.add(hdfc_bank);
setOfbanks.add(punjab_bank);
console.log(setOfbanks);
// sir na loop madhi iterator chya jagi bank lihala.




console.log(`*******3 set traverse using for of loop *******`);
for (const iterator of setOfbanks) {
   console.log("Bank:",iterator.bankName,"Location:",iterator.location);
}