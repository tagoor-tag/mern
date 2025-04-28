const obj = { number: 4 };

function expoValue(){
    console.log( this.number * this.number  );
     
}

const boundExpoValue = expoValue.bind(obj);

boundExpoValue();

