console.log('linked')
console.log(employeeList);

let employeeTable = document.querySelector('#employee-info');
let totalSalary = 0;
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
function addEmployeeList(array) {
    for (let i = 0; i < array.length; i++) {
        totalSalary += Number(array[i].salary);
        employeeTable.innerHTML += `
        <tr>
                <td>${array[i].firstName}</td>
                <td>${array[i].lastName}</td>
                <td>${array[i].idNumber}</td>
                <td>${array[i].title}</td>
                <td>${usDollar.format(array[i].salary)}</td>
                <td><button onClick="removeEmployee(event)">
                Delete
                </button></td>
            </tr>`
        
} 
let totalMonthly = totalSalary / 12;

totalSalaryAmount.innerHTML = `Total Monthly: ${usDollar.format(totalMonthly)}`;
}


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
    totalSalary = salary + totalSalary;
    totalMonthly = totalSalary / 12;
    console.log(totalSalary);
    employeeTable.innerHTML +=`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td id="${idNumber}-salary">${usDollar.format(salary)}</td>
            <td><button onClick="removeEmployee(event)">
            Delete
            </button></td>
        </tr>`
    console.log(totalMonthly);
    totalSalaryAmount.innerHTML = `Total Monthly: ${usDollar.format(totalMonthly)}`;
    console.log(employeeList);
}

function removeEmployee(event) {
    console.log('remove employee', event.target.parentElement.parentElement);
    // Pop-up to confirm removal! Watch those eager fingers, boss!
    if (window.confirm('WARNING! Are you sure you want to delete this employee? This action cannot be undone.')) {
        // totalSalary -= event.target.
        event.target.parentElement.parentElement.remove();
    }
}
