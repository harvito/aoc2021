// load fs module
var fs = require('fs');
var filename = 'input.txt';
fs.readFile(filename, 'utf8', function(err, data) {
    // err handle
    if (err) throw err;

    // split into lines
    var lines = data.split(/\r?\n/);
    console.log(lines.length + ' lines of input');
    
    var count = 0;
    // start at i = 3 so we can look back 2 3-item sums
    for (let i = 3; i < lines.length; i++) {
        n3ago = parseInt(lines[i-3])
        n2ago = parseInt(lines[i-2])
        n1ago = parseInt(lines[i-1])
        thisN = parseInt(lines[i]);

        last3Sum = n3ago + n2ago + n1ago // the 3-sum before
        this3Sum = n2ago + n1ago + thisN // this 3-sum
        if (this3Sum > last3Sum) { count++ };
    }
    console.log('count: ' + count);
});