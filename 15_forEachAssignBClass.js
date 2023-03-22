class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}    
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali","Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
//console.log(array_employees);

console.log(`*******step1******`);
array_employees.forEach(employee => {
    if(employee.emp_company=="TCS") {
        
        console.log(`Employee name: ${employee.emp_name}  Employee company: ${employee.emp_company} `);

    }
});


console.log(`*******step2******`);

array_employees.forEach(employee => {
    if(employee.emp_salary>=50000) {
        
        console.log(`Employee name: ${employee.emp_name}  Employee company: ${employee.emp_company}  Employee id: ${employee.emp_id}   Employee department: ${employee.emp_dept}   Employee salary: ${employee.emp_salary}`);

    }
});


console.log(`*******step3******`);
// sum of all emoloyee salary

let salaryAdd=0;
array_employees.forEach(employee => {
    salaryAdd= salaryAdd + employee.emp_salary
});

console.log("sum of all employee salary:",salaryAdd);

console.log(`*******step4******`);
// average salary.
let salarysum=0;
array_employees.forEach(employee => {
    salarysum = salarysum+employee.emp_salary
});
console.log(salarysum/array_employees.length);


console.log(`*******step5******`);



array_employees.forEach(employee => {
    if(employee.emp_dept=="It" || "HR" && employee.emp_salary>=75000) {
        
        console.log(`Employee name: ${employee.emp_name}  Employee company: ${employee.emp_company}  Employee id: ${employee.emp_id}   Employee department: ${employee.emp_dept}   Employee salary: ${employee.emp_salary}`);

    }
});