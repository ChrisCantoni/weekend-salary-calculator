# Javascript Salary Calculator - Prime weekend challenge

Creating an application that records employee salaries and adds salaries up to report monthly costs.


## Description

This project was assigned as a weekend challenge to build a page that could take in employee data and display it in a table, including the ability to both add and remove employees.

The calculator required a form to collect an employee's first name, last name, ID, job title, and annual salary, submit that form and then append the submitted data in the DOM to an employee table below the form. The calculator also needed a way to remove each employee's entry from the table, as well as displaying the monthly salary and updating the monthly salary as employees were added or removed.

I created a separate js file with an array of employees to pre-populate 
I also added a confirmation window pop-up whenever an employee is selected for deletion.


## Screen Shot

![A screenshot of my put-together salary calculator](./salary-calc-final.png?raw=true "Salary Calculator Final Image")

### Skills practiced:
- JavaScript
- Selectors, appending to the DOM, and event handling
- HTML Forms

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx


## Built With

List technologies and frameworks here

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)