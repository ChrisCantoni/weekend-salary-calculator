console.log('linked')

let employeeTable = document.querySelector('#employee-info');
let totalSalary = 0;
let totalSalaryAmount = document.querySelector('#total-salary');
let employeeList = [];

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

// Takes in all info on employee, adds to DOM and array
function submitEmployee(event){
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNumber = document.querySelector('#id-number').value;
    let title = document.querySelector('#job-title').value;
    let salary = Number(document.querySelector('#annual-salary').value);
    addEmployee(firstName, lastName, idNumber, title, salary);
    totalSalary = salary + totalSalary;
    let totalMonthly = totalSalary / 12;
    console.log(totalSalary);
    employeeTable.innerHTML +=`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td>$${salary}</td>
            <td><button onClick="removeEmployee(event)">
            Delete
            </button></td>
        </tr>`
    console.log(totalMonthly);
    totalSalaryAmount.innerHTML = `${totalMonthly}`;
    console.log(employeeList);
}

function removeEmployee(event) {
    console.log('remove employee', event.target.parentElement.parentElement);
    event.target.parentElement.parentElement.remove();
}
