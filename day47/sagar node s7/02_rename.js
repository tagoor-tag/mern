const { error, log } = require("console")
const fs = require("fs")

fs.rename("01_fs.js" ,"01_CreateNewFile.js",(error)=>{
    if(error) {
        console.log ("failed to rename the  file");
    } else {
        console.log("renamed file successfuly")
    }
})