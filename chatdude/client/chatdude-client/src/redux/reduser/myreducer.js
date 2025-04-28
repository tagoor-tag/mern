const myReducer = (currentDataStore , action) =>{
    var newdata = {};

    if(action.type === "LOGINDATA"){
        newdata = action.payload;
    }


    return newdata;
}

export default myReducer;