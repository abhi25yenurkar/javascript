class Employee {
emp_id;
emp_name;
emp_dept;
emp_salary;
emp_company;

constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){


    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;

}
    
}
  let emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
  //console.log(emp_anil);
  let emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
  let emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
  let emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
  let emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
  let emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
  let emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

  



  // add emp objects in arry

let arry_employess=[emp_anil ,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


// for (const element of arry_employess) {
//     console.log(`${element.emp_id}, ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
// }
console.log("******* STEP1 *******");
// employee working in TCS
for (const Employee of arry_employess) {
    
    if(Employee.emp_company== "TCS" )

    console.log(` Employee name:${Employee.emp_name}  Employee company:${Employee.emp_company}`);
}


// finance departments employee
console.log("******* STEP2 *******");

for (const Employee of arry_employess) {
    
    if(Employee.emp_dept == "Finance" )

    console.log(` Employee department:${Employee.emp_dept}  Employee name:${Employee.emp_name}`);
}

console.log("******* STEP3 *******");

for (const Employee of arry_employess) {
    if(Employee.emp_name.startsWith('R')){
        console.log(`Employee id: ${Employee.emp_id}, Employee Name: ${Employee.emp_name}, Employee department: ${Employee.emp_dept},  Employee salary: ${Employee.emp_salary}, Employee company: ${Employee.emp_company}`);
   }
}


console.log("******* STEP4 *******");
// salary greater>= 75000
for (const Employee of arry_employess) {
    
    if(Employee.emp_salary> 75000)

    console.log(` Employee name:${Employee.emp_name}  Employee company:${Employee.emp_company} Employee salary: ${Employee.emp_salary}`);
}

console.log("******* STEP5 *******");
// salary >= 50000 && dept it
for (const Employee of arry_employess) {
    
    if(Employee.emp_salary>= 50000 && Employee.emp_dept == "IT")

    console.log(` Employee name:${Employee.emp_name}  Employee company:${Employee.emp_company} Employee salary: ${Employee.emp_salary} Employee id: ${Employee.emp_id} Employee department: ${Employee.emp_dept}` );
}

console.log("******* STEP6 *******");
// employee from company infy.
for (const Employee of arry_employess) {
    
    if(Employee.emp_company == "Infy")

    console.log(` Employee name:${Employee.emp_name}  Employee company:${Employee.emp_company} Employee salary: ${Employee.emp_salary} Employee id: ${Employee.emp_id} Employee department: ${Employee.emp_dept}` );
}

   
