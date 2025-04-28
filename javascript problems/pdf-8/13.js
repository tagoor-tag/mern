const person = { 
    name: "Emma", 
    regularFunc: function () { 
      console.log(this.name); 
    }, 
    arrowFunc: () => { 
      console.log(this.name); 
    }, 
  }; 
   
  person.regularFunc(); 
  person.arrowFunc(); 