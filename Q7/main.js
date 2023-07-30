const fs = require('fs');
const util = require('util');
const fs1 = util.promisify(fs.unlink);

async function unlink()
{
    try{
        await fs1('./delfile.txt');
        console.log("Unlink Successfull...");
    }
    catch
    {
        console.log("No file or directory found...");
    }
}
unlink();