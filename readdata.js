// Using callback

const fs = require('fs');
fs.readFile('sample1', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log('Success : ',data);
})


// Using promise

const fs = require('fs').promises;
fs.readFile('sample1', 'utf8')
    .then(data => {
        console.log('Success : ', data);
    })
    .catch(err => {
        console.log(err);
    });

    
// Using async/await

const fs = require('fs').promises;
async function getFile() {
    try {
        const data = await fs.readFile('sample1', 'utf8');
        console.log('Success : ', data);
    } catch (err) {
        console.error('Failed', err);
    }
}
getFile();
