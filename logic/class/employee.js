function employee(id, name, department, salary) {
    this.id = id
    this.name = name
    this.department = department
    this.salary = salary
}

const employeeDB = {};

function addEmployee(id, name, department, salary) {
    const employee1 = new employee(id, name, department, salary)
    employeeDB[id] = employee1;
    console.log(`Employee ${id} added`)
}

function getAllEmployees() {
    const employees = Object.values(employeeDB)
    console.log("List of employees")
    employees.forEach((employee) => (
        console.log(`Name: ${employee.name}, Department: ${employee.department}, Salary: ${employee.salary}`)
    ))
}

function getOneEmployee(id) {
    if (employeeDB[id]) {
         return Object.entries(employeeDB[id])
 
    }
    return `Employee ${id} not found`;
}


function updateOneEmployee(id, updateDetails) {
    if (employeeDB[id]) {
         Object.assign(employeeDB[id], updateDetails)
         console.log(`Employee ${id} updated`)
    }
    return `Employee ${id} not found`;
}

//Cannot update the details and delete
function freezeEmployeeData(id) {
    if (employeeDB[id]) {
        Object.freeze(employeeDB[id])
        console.log("Employee data freezed")
    }
    return `Employee ${id} not found`;
}

//Can able to  update the details and but not delete

function sealEmployeeData(id) {
    if (employeeDB[id]) {
        Object.seal(employeeDB[id])
        console.log("Employee data sealed")
    }
    return `Employee ${id} not found`;
}
addEmployee(1, "Bob", "ECE", 40000);
addEmployee(2, "Alice", "CSE", 45000);
addEmployee(3, "John", "MECH", 50000);

console.log("\n");
getAllEmployees();

console.log("\nGet one employee:");
getOneEmployee(2);

console.log("\nUpdate employee:");
updateOneEmployee(3, { salary: 80000 });
getAllEmployees();

console.log("\nFreeze employee 2:");
freezeEmployeeData(2);
employeeDB[2].salary = 90000; // ❌ won't change
getAllEmployees();

console.log("\nSeal employee 1:");
sealEmployeeData(1);
employeeDB[1].salary = 60000; // ✅ allowed
getOneEmployee(1);