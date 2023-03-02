
var check_leap_year = function(leap_year){

  if(leap_year == null || leap_year==isNaN || leap_year == undefined ||  typeof leap_year!="number" ||leap_year<=0)

  {
      console.log(`${leap_year} is not valid data please provide valid data`);
  }
    
  
   

 else if (leap_year%400==0 ||(leap_year%4==0 && leap_year%100!=0) )
{
    console.log(`${leap_year} is a leap year`);
    
} 
  else
  {
    console.log(`${leap_year} is not a leap year`);
  } 
   
}


check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(null);
check_leap_year(" Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(2016);
