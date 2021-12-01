// Read the file and print its contents.
var fs = require('fs')
  , filename = 'input.txt';
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    var lines = data.split(/\r?\n/);
    console.log(lines.length + ' lines of input');
    var n = parseInt(lines[0]);
    console.log('original n: ' + n)
    var count = 0;

    for (line of lines) {
        console.log('line is ' + line);
        this_n = parseInt(line);
        // console.log('this n: ' + this_n + ' n: ' + n);
        if (this_n > n) { count++ };
        n = this_n
    }
    console.log('count: ' + count);
  });