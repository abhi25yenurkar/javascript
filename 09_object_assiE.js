
console.log("******* STEP 1 *******");
let sbiBank = {

    bankName: "STATE BANK OF INDIA",
    location: "Nagpur",
    accountNo:10000257896,
    ifsc:"SBIN0004632",
    interestRate:"7% p.a",

   showDetails: function(){
 
    console.log(`Bank Name:${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo}, IFSCCode: ${this.ifsc}, InterestRate: ${this.interestRate}`);

    }
};
sbiBank.showDetails();


console.log("******* STEP 2 *******");


let axisBank = {

    bankName: "AXIS BANK",
    location: "Wardha",
    accountNo:10000257897,
    ifsc:"AXIN0007856",
    interestRate:"9% p.a",

   showDetails: function(){
 
    console.log(`Bank Name:${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo}, IFSCCode: ${this.ifsc}, InterestRate: ${this.interestRate}`);

    }
};
axisBank.showDetails();


console.log("******* STEP 3 *******");


let yesBank = {

    bankName: "YES BANK",
    location: "Pune",
    accountNo:10000257253,
    ifsc:"YESN0005961",
    interestRate:"5% p.a",

   showDetails: function(){
 
    console.log(`Bank Name:${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo}, IFSCCode: ${this.ifsc}, InterestRate: ${this.interestRate}`);

    }
};
yesBank.showDetails();


console.log("******* STEP 4 *******");

let hdfcBank = {

    bankName: "HDFC BANK",
    location: "Mumbai",
    accountNo:10000257253,
    ifsc:"HDFCN0005985",
    interestRate:"6.5% p.a",

   showDetails: function(){
 
    console.log(`Bank Name:${this.bankName}, Location: ${this.location} , AccountNo: ${this.accountNo}, IFSCCode: ${this.ifsc}, InterestRate: ${this.interestRate}`);

    }
};
hdfcBank.showDetails();