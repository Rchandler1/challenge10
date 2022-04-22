const Manager = require('../lib/Manager.js')

test('creates a new manager object', ()=>{
const manager = new Manager('name');

expect (manager.role).toBe('manager');
expect (manager.officeNumber).toEqual(expect.any(Number));
//console.log(employee.id)
});