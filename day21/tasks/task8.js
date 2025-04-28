// You have an array of objects representing users.
// Write a function to add a new user object to the array.

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
    ];

    var userData = {
      id:3,
      name:"suresh"
    }
    
    function FetchData(users,newUser){
  users.push(newUser)
  return users
    }

    const data = FetchData(users,userData)

    console.log(data);
    






    