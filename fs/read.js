var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
  fs.readFile("./theory.md",(err,data) => {
    console.log(data)
  })
// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.
fs.readFile("./theory.md",(err,data) => {
  console.log(data.toString())
})
// 3. Write script to read file Synchronously and console the output.
 fs.readFileSync("./theory,md",(err,data) => {
   console.log(data.toString())
 })
// 4. Write script to create a file 'write.js' and write content of read.js in there.
fs.writeFile("write.js","hello",(err,file) =>{
  console.log(data);
})
// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
fs.open("./write.js",(err,data) => {
  console.log("file-opened")
})
//   - remove earlier content using fs.ftruncate
fs.ftruncate("./write.js",(err) => {
console.log("cleared")
})
//   - add new content using fs.writeFile
fs.writeFile("./write.js","hello",(err,data) => {
  console.log(data)
})
//   - close the file at last using fs.close
fs.close("./write.js",(err) => {
  console.log("file closed")
})

// 6. Delete the content of write.js using fs.unlink or unlinkSync method
fs.unlink("./write.js",(err) => {
  console.log("deleted")
})