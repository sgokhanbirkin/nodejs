const {
    readFile,
    writeFile
} = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        const merged = first +" "+ second;
    writeFile('./content/result.txt', `Merged Data : ${merged}`, 'utf-8', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File saved!');
    });
    });
    
});


