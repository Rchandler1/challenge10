const Intern = require('../lib/Intern.js')

test('creates a new intern object', ()=>{
const intern = new Intern('name');

expect (intern.school).toBe('school');
expect (intern.getRole).toBe('intern');
});