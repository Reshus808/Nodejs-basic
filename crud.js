const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`

// create file
// fs.writeFileSync(filePath, 'this is apple file');
// console.log('new file create')

//read file
// fs.readFile(filePath, 'utf-8',(err, item) => {
//   if(!err) {
//     console.log(item);
//   }
// })

//update file
// fs.appendFile(filePath,' for fruits',(err) => {
//   if(!err) {
//     console.log('file is updated')
//   }
// })

//rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if(!err) console.log('file name is updated');
// });


//delete file
// fs.unlinkSync(`${dirPath}/fruit.txt`);


// async await
let a = 10;
let b = 20;


setTimeout(()=>{
  b = 30;
}, 2000)

console.log(a+b);



const waitingData = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    // b = 30;
    resolve(30)
  }, 2000)
})

waitingData.then((data) => {
  b = data;
  console.log(a+b);
})


//node js work process

console.log('start time')

setTimeout(() => {
  console.log('2 second wait');
}, 2000)

setTimeout(() => {
  console.log('0 second wait');
}, 0)

console.log('finish time')