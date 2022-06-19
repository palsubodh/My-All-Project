import sum from './sum.js'
test('testing sum function',()=>{
    expect(sum(3,4)).toBe(7)
});



/*
step 1 npm init
step 2 npm install jest
step 3 goto package.json and change test:"echo" to "jest"
step 4 create a file for function and export it
step 5 create a file for fuction.test.js for testing function and import it
step 6  create a file for babel.config.js("goto : jestjs.io.com")
step 7 code the link of babel and install it 
step 8  final step npm test
*/