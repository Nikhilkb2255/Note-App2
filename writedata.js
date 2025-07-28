// Using callbacks

const fs = require('fs');
fs.writeFile('sample3', 'This is third sample', err => {
    if (err) return console.error(err);
    console.log('3rd sample success')
});


// Using promises

const fs = require('fs').promises;
fs.writeFile('sample4', 'This is fourth sample')
    .then(data => {
        console.log("3rd sample success");
    })
    .catch(err => {
        console.error(err);
    });


// Using async/await

const fs = require('fs').promises;
async function writeFile() {
    try {
        await fs.writeFile('sample5', 'This is fifth sample');
        console.log('5th sample success');
    } catch (err) {
        console.error(err);
    }
};

writeFile();
