const { error, log } = require("console");
const fs = require("fs");
//here fs is a object


//.create a new fine
fs.open("demo.txt", "w", (error) => {
    if (error) {
        console.log("Failed to create file");
    } else {
        console.log("Successfully created file")
    }
})


fs.writeFile("Products.jsx", "", (error) => {
    if (error) {
      console.log("Failed to create a file");
    } else {
      console.log("successfully created the file");
    }
  });