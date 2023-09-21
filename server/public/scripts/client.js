console.log('Client is running');
// const employeeList = require('../../employees.js');
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
        monthlySalary(array[i].salary);
        employeeTable.innerHTML += `
        <tr id="${array[i].idNumber}" data-value="${array[i].salary}">
                <td>${array[i].firstName}</td>
                <td>${array[i].lastName}</td>
                <td>${array[i].idNumber}</td>
                <td>${array[i].title}</td>
                <td class="salary">${usDollar.format(array[i].salary)}</td>
                <td><button onClick="removeEmployee(event)">
                Delete
                </button></td>
            </tr>`
        
    } 
}
// Adding the fake employees to the employeeList
addEmployeeList(employeeList);

// Takes in all info on employee from the form fields, adds to DOM and array
function submitEmployee(event){
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNumber = document.querySelector('#id-number').value;
    let title = document.querySelector('#job-title').value;
    let salary = Number(document.querySelector('#annual-salary').value);
        // Check to ensure ID numbers are unique.
        for (let i = 0; i < employeeList.length; i++) {
            if (idNumber == employeeList[i].idNumber) {
            alert('That ID number already exists. Please check your ID number.');
            return;
            }}
    addEmployee(firstName, lastName, idNumber, title, salary);
    employeeTable.innerHTML +=`
        <tr id="${idNumber}">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td class="salary">${usDollar.format(salary)}</td>
            <td><button onClick="removeEmployee(event)">
            Delete
            </button></td>
        </tr>`
        // Empties the input fields for next input
        document.querySelector('#first-name').value = '';
        document.querySelector('#last-name').value = '';
        document.querySelector('#id-number').value = '';
        document.querySelector('#job-title').value = '';
        document.querySelector('#annual-salary').value = '';
    monthlySalary(salary);
    console.table(employeeList);
        }


function removeEmployee(event) {
    // Getting the id from the <tr> ensures that we get the correct employee even if they
    // have the same salary as someone else. Doesn't matter for subtracting salary, but it could matter in another scenario!
    // It also frees up the ID number to be reused.
    let removedEmployeeId = event.target.parentElement.parentElement.id;
    let removedEmployeeName = event.target.parentElement.parentElement.cells[0].innerHTML + ' ' + event.target.parentElement.parentElement.cells[1].innerHTML;
    // Pop-up to confirm removal! Watch those eager fingers, boss
    if (window.confirm('WARNING! Are you sure you want to delete this employee? This action cannot be undone.')) {
            // Using the employeeList array rather than an array input at the start of 
            // the function is maybe not good practice, 
            // but since the array is a static element, I thought it made sense here.
        for (let i = 0; i < employeeList.length; i++) {
            if (removedEmployeeId == employeeList[i].idNumber) {
                let removedEmployeeSalary = Number(employeeList[i].salary);
                // Removes employee from list of employees, ID Number can now be reused.
                employeeList.splice([i], 1);
                // Makes the salary a negative so the monthlySalary function works in both directions
                removedEmployeeSalary = -Math.abs(removedEmployeeSalary);
                monthlySalary(removedEmployeeSalary);
            }
        }
        // Removes the entry in the table.
        event.target.parentElement.parentElement.remove();
        console.log(`${removedEmployeeName}, Employee ${removedEmployeeId}, has been terminated.`);
        console.table(employeeList);
    }
}

// function to calculate monthly salary for both adding and removing employees
function monthlySalary(employeeSalary) {
    totalSalary += employeeSalary;
    totalMonthly = totalSalary / 12
    totalSalaryAmount.innerHTML = `Total Monthly: ${usDollar.format(totalMonthly)}`;
}
