const fs = require('fs').promises;
async function readFile() {
    try {
        const data = await fs.readFile('example1', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
readFile();


const fs = require('fs').promises;
async function createFile() {
    try {
        await fs.writeFile('example1', 'This the first example');
        console.log('Success');
    } catch (err){
        console.error(err);
    }
}
createFile();


const fs = require('fs').promises;
async function updateFile() {
    try {
        await fs.appendFile('example1', 'This the first example');
        console.log('Success');
    } catch (err){
        console.error(err);
    }
}
updateFile();


const fs = require('fs').promises;
async function renameFile() {
    try {
        await fs.renameFile('example1', 'This the first example');
        console.log('Success');
    } catch (err){
        console.error(err);
    }
}
renameFile();


const fs = require('fs').promises;
async function deleteFile() {
    try {
        await fs.unlink('example1', 'This the first example');
        console.log('Success');
    } catch (err){
        console.error(err);
    }
}
deleteFile();

