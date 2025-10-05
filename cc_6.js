class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}
describe() {
    return `${this.name} works in ${this.department}`;
}
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
     describe() {
    return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} employees.`;
  }
}
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("---- Company Employees ----");
    this.employees.forEach(employee => {
      console.log(employee.describe());
    });
  }
}

