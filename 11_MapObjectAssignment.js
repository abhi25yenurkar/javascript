// 11_ObjectAssignment.js
console.log("******* Object created using class *******");
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


console.log("******* create Map *******");
// create a map keys is account no and value is object.


const mapOfBank=new Map();
mapOfBank.set("123456",axis_bank);
mapOfBank.set("23456656",sbi_bank);
mapOfBank.set("8645665",icici_bank);
mapOfBank.set("65647555",kotak_bank);
mapOfBank.set("9547555",hdfc_bank);
mapOfBank.set("454543456",punjab_bank);
console.log(mapOfBank);

console.log("******* Traverse Map *******");

mapOfBank.get();  // value get kara sathi
const keysOfMap = mapOfBank.keys();// keys sathi

for (const key of keysOfMap) {
    
    const element = mapOfBank.get(key)
    console.log("Bank Name:",element.bankName, "Account No:",element.accountNo,"Interest Rate:", element.interestRate);
    }