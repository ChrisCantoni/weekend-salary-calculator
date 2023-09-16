console.log('linked')

let employeeTable = document.querySelector('#employee-info');

function submitEmployee(event){
    event.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let salary = document.querySelector('#annual-salary').value;
    employeeTable.innerHTML +=`
    <tr>
    <td>${firstName}</td>
    <td>$${salary}</td>
    </tr>`
    console.log('we ran the code')
}