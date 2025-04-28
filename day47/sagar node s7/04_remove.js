const { error } = require("console")
const fs = require("fs")

fs.unlink("file.java", (error)=>{
    if (error){
        console.log("failed to remove the file");
        console.log(error);
    } else {
        console.log("Successfully created the file");
    }
})