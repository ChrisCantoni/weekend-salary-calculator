let employeeTable = document.querySelector('#employee-info');
let totalSalary = 0;
let totalMonthly = 0;
let totalSalaryAmount = document.querySelector('#total-salary');

// Proper currency formatting found via freeCodeCamp
let usDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

// Adds all employees to an array
function addEmployee(firstName, lastName, idNumber, title, salary) {
    let employeeToAdd = {
        firstName,
        lastName,
        idNumber,
        title,
        salary
    }
    employeeList.push(employeeToAdd);
    return employeeToAdd;
}
// Function for populating the page with existing employee rolls for easier testing
function addEmployeeList(array) {
    for (let i = 0; i < array.length; i++) {
        monthlySalary(Number(array[i].salary));
        employeeTable.innerHTML += `
        <tr id="${array[i].idNumber}" data-value="${array[i].salary}">
                <td>${array[i].firstName}</td>
                <td>${array[i].lastName}</td>
                <td>${array[i].idNumber}</td>
                <td>${array[i].title}</td>
                <td class="salary">${usDollar.format(array[i].salary)}</td>
                <td class="del-button"><button onClick="removeEmployee(event)">
                Delete
                </button></td>
            </tr>`
        
    } 
}
// Adding the fake employees to the employeeList
addEmployeeList(employeeList);

// Takes in all info on employee, adds to DOM and array
function submitEmployee(event){
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNumber = document.querySelector('#id-number').value;
    let title = document.querySelector('#job-title').value;
    let salary = Number(document.querySelector('#annual-salary').value);
    addEmployee(firstName, lastName, idNumber, title, salary);
    employeeTable.innerHTML +=`
        <tr id="${idNumber}">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td class="salary">${usDollar.format(salary)}</td>
            <td class="del-button"><button onClick="removeEmployee(event)">
            Delete
            </button></td>
        </tr>`
    monthlySalary(salary);
    console.log(employeeList);
}

function removeEmployee(event) {
    let removedEmployeeId = event.target.parentElement.parentElement.id;
    console.log(removedEmployeeId);
    for (let i = 0; i < employeeList.length; i++) {
        if (removedEmployeeId == employeeList[i].idNumber) {
            let removedEmployeeSalary = Number(employeeList[i].salary);
            removedEmployeeSalary = -Math.abs(removedEmployeeSalary);
            monthlySalary(removedEmployeeSalary);
            console.log(removedEmployeeSalary);
        }
    }
    // Pop-up to confirm removal! Watch those eager fingers, boss
    if (window.confirm('WARNING! Are you sure you want to delete this employee? This action cannot be undone.')) {
        event.target.parentElement.parentElement.remove();
        }
}

function monthlySalary(employeeSalary) {
    totalSalary += employeeSalary;
    totalMonthly = totalSalary / 12
    totalSalaryAmount.innerHTML = `Total Monthly: ${usDollar.format(totalMonthly)}`;
}
