var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./files/file1.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./files/file1.txt','utf-8'));
  
console.log("File Decompressed.");