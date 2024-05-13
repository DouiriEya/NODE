global.console.log('HELLO WORLD ');
// 2- creating a server 
const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
});

server.listen(3000);
// 3- reading and writing with fs : 
const fs = require('fs'); 
fs.writeFile("welcome.txt" ,"Hello Node",(err,data)=>{
    if (err) {console.error(err)}; 
    console.log('file created and data added sucessfully') ; 
}) ; 
fs.readFile("hello.txt",(err,data)=>{
    if (err) {console.error(err)}; 
    console.log(data.toString());

}) ; 
// 4-