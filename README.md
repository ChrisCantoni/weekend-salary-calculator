# Javascript Salary Calculator - Prime weekend challenge

Creating an application that records and displays employee salaries and adds salaries up to report monthly costs.


## Description

This project was assigned as a weekend challenge to build a page that could take in employee data and display it in a table, including the ability to both add and remove employees.

The calculator required a form to collect an employee's first name, last name, ID, job title, and annual salary, submit that form and then append the submitted data in the DOM to an employee table below the form. The calculator also needed a way to remove each employee's entry from the table, as well as displaying the monthly salary and updating both the monthly salary and the list of employees as employees were added or removed.

I created a separate .js file with an array of employees to pre-populate, primarily to make testing easier, but also for fun!

I also added a confirmation window pop-up whenever an employee is selected for deletion, which felt like a necessary part of the UX for any employee removal program.


## Screen Shot

![A screenshot of my put-together salary calculator](./salary-calc-final.png?raw=true "Salary Calculator Final Image")

### Skills practiced:
- JavaScript
- Selectors, appending to the DOM, and event handling
- HTML Forms

### Steps
Steps taken to build this project:

- [ ] Add HTML form with onSubmit
- [ ] Add an input for first name
- [ ] Add a submit button
- [ ] Create a function that appends the first name to the DOM
- [ ] Add input for annual salary
- [ ] Add salary to DOM
- [ ] Update total monthly salary (annual divided by 12) on the DOM
- [ ] Convert to HTML format - create a table for all the info
- [ ] Add input for last name, ID, title
- [ ] Add delete button
- [ ] Add functionality to remove deleted employee from table
- [ ] Subtract deleted employee's salary from total monthly calculation
- [ ] Create an array of employees to preload as a sample
- [ ] Add each submitted employee to said array
- [ ] Have each employee removed from employee array upon deletion
- [ ] Add pop-up confirmation when deleting an employee
- [ ] Add express and server.js for further practice with servers


### Built With

Javascript

HTML & CSS


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality, all the anonymous users at StackOverflow, and the very simple "How to format currency" guide at freeCodeCamp.

## Support
If you have suggestions or issues, please email me at TBD.