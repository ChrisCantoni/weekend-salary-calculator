console.log('linked')

let employeeTable = document.querySelector('#employee-info');
let totalSalary = 0;
let totalSalaryAmount = document.querySelector('#total-salary');

function submitEmployee(event){
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let salary = Number(document.querySelector('#annual-salary').value);
    totalSalary = salary + totalSalary;
    let totalMonthly = totalSalary / 12;
    console.log(totalSalary);
    employeeTable.innerHTML +=`
    <tr>
    <td>${firstName}</td>
    <td>$${salary}</td>
    </tr>`
    console.log(totalMonthly);
    totalSalaryAmount.innerHTML = `${totalMonthly}`;
}



