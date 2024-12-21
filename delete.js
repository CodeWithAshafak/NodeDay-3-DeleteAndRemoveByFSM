const fs = require('fs');
fs.unlink('new.txt',(err)=>{
  if(err) throw err,
  console.log("file deleted ...!");
  
})