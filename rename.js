const fs = require("fs");

fs.rename("rename.txt", "renamed.txt", (err) => {
  if (err) throw err;
  console.log("file renamed successfully....!");
});
