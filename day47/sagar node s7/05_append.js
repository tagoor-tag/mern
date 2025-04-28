const { error, log } = require("console");

const fs = require("fs");

fs.readFile("05_content.html", "utf-8",(error,data)=>{
  if (error){
    console.log("error file reading the data from contact.html file")
  } else{

    fs.appendFile("newHtml.html", data, (error)=>{
      if(error){
        console.log("failed to add the content in newhtml.html file")
      } else{
        console.log("added the content in newHtml.html file");
        
      }
    })
  }
})
