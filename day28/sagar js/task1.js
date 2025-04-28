var data = {
    result :[
        {
        name:{
            title: "Mr",
            first :"Rohan",
            last :"singh"
        },
        location:{
            street:{
                pin:22345,
                colony:"Shiva nagar"
            },
            city:"pune"

        }
    },
    {
        name: {
            title: "Mr",
            first :"yash",
            last :"verma"
        },
        location : {
            street:{
                pin:21344,
                colony:"bb nagar"
            },
            city:"bengulru"
    
        }
    },
    {
    name: {
        title: "Mr",
        first :"arjun",
        last :"reddy"
    },
    location : {
        street:{
            pin:22344,
            colony:"Bashree nagar"
        },
        city:"hyderbad"

    }
}],
    info:{}
};
data.result[2].location.street.colony = "bhair bagh"


console.log(data.result[2].location.street.colony);
