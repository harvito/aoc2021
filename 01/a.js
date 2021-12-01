// load fs module
var fs = require('fs');
var filename = 'input.txt';
  fs.readFile(filename, 'utf8', function(err, data) {
    // err handle
    if (err) throw err;
    
    // split into lines
    var lines = data.split(/\r?\n/);
    console.log(lines.length + ' lines of input');

    var n = parseInt(lines[0]);
    var count = 0;

    // for of iterates though in order
    for (line of lines) {
        this_n = parseInt(line);
        if (this_n > n) { count++ };

        n = this_n // ready for next iteration
    }
    console.log('count: ' + count);
  });