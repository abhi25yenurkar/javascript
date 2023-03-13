function Bank(bankName,location,ifscCode,_branchCode){

    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this._branchCode= _branchCode;
    


    this.show = function(){
     
        console.log(`  Bank Details is:- Bank name: ${this.bankName}, location: ${this.location}, Ifsc code: ${this.ifscCode}, Branch code: ${this._branchCode}.`);
    }
}


Bank.prototype.openTime ="9 AM IST";
Bank.prototype.closeTime ="6 PM IST";



console.log("*******1. FUNCTION CONSTRUCTOR *******");



const yes =new Bank (" YES Bank","Nagpur","YES78546","NAY22123");
yes.show();
//console.log(yes.closeTime);

const sbi =new Bank (" STATE BANK OF INDIA","Hingna","SBI8546","SB29124");
sbi.show();


const mah =new Bank ("MAHARASHATRA BANK","Raipur","MA8546","MAB2821");
mah.show();


const axis =new Bank ("AXIS BANK","Midc Road","AX8546","AXIS2820");
axis.show();


console.log("*******2. ADDING DATA MEMBERS USING PROTOTYPE *******");


console.log(` Open time of YES BANK is:  ${yes.openTime} & close time is:  ${yes.closeTime} `);
console.log(` Open time of STATE BANK OF INDIA is:  ${sbi.openTime} & close time is:  ${sbi.closeTime} `);
console.log(` Open time of MAHARASHATRA BANK is:  ${mah.openTime} & close time is:  ${mah.closeTime} `);
console.log(` Open time of AXIS BANK is:  ${axis.openTime} & close time is:  ${axis.closeTime} `);