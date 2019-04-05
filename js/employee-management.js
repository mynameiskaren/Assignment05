/*eslint-env browser*/

window.addEventListener('load', function () {

    'use strict';

    var $ = function (id) {
        return document.getElementById(id);
    };

    function currentEmployees() {
        var employees = [];
        var employee1 = ['Michael Ramirez', 'Counselor', 497];
        var employee2 = ['Dustin Drake', 'System Operator', 305];
        var employee3 = ['Suzanne D Rocha', 'Social Service', 551];
        var employee4 = ['John J Casey', 'Maintenance', 207];
        var employee5 = ['Aaron B Munoz', 'Physiologist', 466];

        employees.push(employee1, employee2, employee3, employee4, employee5);
        return employees;
    }

        function add(employees) {

        var tempEmployee = [];
        var name = $('name').value;
        var title = $('title').value;
        var extension = $('extension').value;

        if (!validate(name, title, extension)) {
            return false;
        }

        $('nameError').innerHTML = '';
        tempEmployee[0] = name;
        $('name').value = '';

        $('jobError').innerHTML = '';
        tempEmployee[1] = title;
        $('title').value = '';

        $('extError').innerHTML = '';
        tempEmployee[2] = extension;
        $('extension').value = '';

        makeTable(tempEmployee);
        employees.push(tempEmployee);
    }
    function validate(name, title, extension) {

        if (!name || !title || !extension) {
            if (name === '') {
                $('nameError').innerHTML = "* Error. Please enter the full name.";
            } else {
                $('nameError').innerHTML = "";
            }
            if (title === '') {
                $('jobError').innerHTML = "*Error. Please enter user's job title";
            } else {
                $('jobError').innerHTML = "";
            }
            if (extension === '') {
                $('extError').innerHTML = "* Error. Please enter a number for their extension.";
            } else {
                $('name-error').innerHTML = "";
            }

            return false;
        }

        if (isNaN(+extension)) {
            $('extError').innerHTML = "Extension Must be a Number";
            return false;
        } else {
            $('extError').innerHTML = "";
        }

        return true;
    }


    function makeTable(employee) {
        var table = $('table');
        var row = table.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = employee[0];
        cell2.innerHTML = employee[1];
        cell3.innerHTML = employee[2];
        cell4.innerHTML = "<button class='deleteBtn'>Delete Entire User</button>";
    }

    function init() {
        var employees = currentEmployees();

        employees.forEach(function (employee) {
            makeTable(employee);
        });

        $('enter').addEventListener('click', function () {
            add(employees);

            $('totalEmployees').innerHTML = employees.length;
        });

        var table = $('table');

        table.addEventListener('click', function (e) {
            if (e.target.nodeName === 'BUTTON') {

                var cell = e.target.parentNode;
                var row = cell.parentNode;
                var table = row.parentNode;

                var rowInfo = row.childNodes;
                var name = rowInfo[0].innerHTML;
                var title = rowInfo[1].innerHTML;
                var extension = rowInfo[2].innerHTML;

                for (var i = 0; i < employees.length; i++) {
                    if (employees[i][0] == name && employees[i][1] == title && employees[i][2] == extension) {
                        employees.splice(i, 1);
                    }
                }

                table.removeChild(row);

                $('totalEmployees').innerHTML = employees.length;
            }
        });

        $('totalEmployees').innerHTML = employees.length;

    }

    init();
});
