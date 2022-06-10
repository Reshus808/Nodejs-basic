const http = require('http');

//create basic server

// const func_1 = (req, res) => {
//   res.write('<h1>hello world! call function based</h1>');
//   res.end()
// }
// http.createServer(func_1).listen(5000);

// http.createServer((req, res) => {
//   res.write('<h1>hello world!</h1>');
//   res.end()
// }).listen(5000)


//simple api create

// const data = require('./apiData')
//
// http.createServer((req, res) => {
//   res.writeHead(201,{'Content-type': 'application\json'});
//   // res.write(JSON.stringify({name: 'reshu singh', branch: 'cse'}));
//   res.write(JSON.stringify(data));
//   res.end()
// }).listen(5000)

// console.log(process.argv[4])

//fs module
const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2], input[3]) //create also new file
//
// if(input[2] === 'add'){
//   fs.writeFileSync(input[3], input[4])
// }
// else if(input[2] === 'remove') {
//   fs.unlinkSync(input[3])
// } else {
//   console.log('invalid output')
// }

// one file create
// fs.writeFileSync('data.txt', 'this is data');

const path = require('path');

// const dirPath = path.join(__dirname, 'files');
//   //multuple file create at the same time
// for(i=0;i<5;i++){
//   fs.writeFileSync(dirPath+'/app'+i+'.txt', 'app file');
//   fs.writeFileSync(dirPath+`/hello${i}.txt`, 'app file');
// }
// console.log(dirPath)
//read file
// fs.readdir(dirPath,(err,files)=>{
//   files.forEach((file)=>{
//     console.log('file name is', file)
//   })
// })
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`;

fs.writeFileSync(`${path}`)