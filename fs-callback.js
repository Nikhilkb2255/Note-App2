// readFile
// writeFile
// appendFile
// rename
// unlink
// mkdir
// readdir


const fs = require('fs');
fs.readFile('sample1.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log(data);
});

const fs = require('fs');
fs.writeFile('sample2', 'This is second file', err => {
    if (err) return console.error(err);
    console.log('Written successfully');
});

const fs = require('fs');
fs.appendFile('message.txt', '\nThis is an appended line.', err => {
  if (err) return console.error(err);
  console.log('Content appended!');
});

const fs = require('fs');
fs.rename('message.txt', 'newname.txt', err => {
  if (err) return console.error(err);
  console.log('File renamed!');
});

const fs = require('fs');
fs.unlink('newname.txt', err => {
  if (err) return console.error(err);
  console.log('File deleted!');
});

const fs = require('fs');
fs.mkdir('myFolder', err => {
  if (err) return console.error(err);
  console.log('Folder created!');
});

const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) return console.error(err);
  console.log('Files in current directory:', files);
});

