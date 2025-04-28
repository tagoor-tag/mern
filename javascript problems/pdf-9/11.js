const measurments = {
    length : 10,
    width : 5
};

function area(){
    return  this.length * this.width;
}

console.log(area.call(measurments));
