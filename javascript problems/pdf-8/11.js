const obj = {
    name: "Sophia",
    showName: function () {
        function nested() {
            console.log(this.name);
        }
        nested();
    }
};
obj.showName(); 