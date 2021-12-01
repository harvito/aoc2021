// Read the file and print its contents.
// var fs = require('fs');
var filename = 'input.txt';
fs.readFile(filename, 'utf8', function(err, data) {
if (err) throw err;
console.log('OK: ' + filename);
var lines = data.split(/\r?\n/);
console.log(lines.length + ' lines of input');
var count = 0;

for (let i = 3; i < lines.length; i++) {
    n3ago = parseInt(lines[i-3])
    n2ago = parseInt(lines[i-2])
    n1ago = parseInt(lines[i-1])
    thisN = parseInt(lines[i]);

    last3Sum = n3ago + n2ago + n1ago
    this3Sum = n2ago + n1ago + thisN
    if (this3Sum > last3Sum) { count++ };
}
console.log('count: ' + count);
});