var employees = []

function Employee(name, jobTitle, salary, status = "full time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status);
    };
}


var Bob = new Employee ("Bob Schmob", "Booger Picker", "2,000 per year");
var Joe = new Employee ("Joe Schmoe", "Gum Scraper", "3,000 per year");
var Jane = new Employee ("Jane Schmane", "Best Ever Whatever", "50,000 per year", "part time");

// Jane.printEmployeeForm()
// Joe.printEmployeeForm()
// Bob.printEmployeeForm()

employees.push(Bob, Joe, Jane);
console.log(employees)