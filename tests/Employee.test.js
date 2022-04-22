const { TestWatcher } = require('jest')
const Employee = require('../lib/Employee.js')

test('creates a new employee object', ()=>{
const employee = new Employee('name');

expect (employee.name).toBe('name');
expect (employee.id).toEqual(expect.any(Number));
console.log(employee.id)
});