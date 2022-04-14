const { readFile } = require('fs');

console.log('Started a first task');
// Check if file exists
readFile('../content/first.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log('Completed first task');
})

console.log('Starting next task');