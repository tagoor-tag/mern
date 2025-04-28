const http = require("http");
let port = 6754;
//creating sever using http module
const sever = http.createServer((req, res) => {
    console.log("Req is recevied");
    res.end("{name:'sagar', city: 'htd'} ");
});

//start or run the sever

sever.listen(port, () => {
    console.log("Sever Started");
});
