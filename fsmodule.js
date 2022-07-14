const fs = require('fs');

// fs.readFile('input.txt', 'utf-8', (err, data)=>{
//     console.log(err, data);
// })
// console.log('this runs first')

// var a = fs.readFileSync('input.txt');
// console.log(a.toString());

// console.log('this runs first');

// var writethis = "I am student";
// fs.writeFile('input.txt', writethis, ()=>{
//     console.log('written to the file');
// });


// var writethis = "I am student";
// fs.writeFileSync('input.txt', writethis,"UTF-8",{'flag': 'a'});
// console.log('this run before first now')


// var writethis = ". I am in university";
// fs.appendFileSync('input.txt', writethis,"UTF-8",{'flag': 'a'});
// console.log('this run before first now')
// console.log('it run first');



var writethis = "I am student";
var b = fs.writeFileSync('input2.txt', writethis,"UTF-8",{'flag': 'a'});
console.log(b)