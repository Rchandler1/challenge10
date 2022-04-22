const { TestWatcher } = require('jest')
const Engineer = require('../lib/Engineer.js')

test('creates a new engineer object',()=>{
    const engineer = new Engineer('name')

    expect (engineer.getRole).toBe('engineer');
    expect (engineer.github).toBe('github');
}

)