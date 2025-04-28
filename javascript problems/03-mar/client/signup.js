function fnGetUser() {
  var username = document.getElementById("username").value;

  var phone = document.getElementById("phone").value;

  var email = document.getElementById("email").value;

  var genderInput = document.getElementsByName("gender");

  var gender;

  if (genderInput[0].checked) {
    gender = "male";
  } else if (genderInput[1].checked) {
    gender = "female";
  } else {
    gender = "other";
  }

  var newdata = {
    name: username,
    phone: phone,
    Email: email,
    gender: gender,
  };

  console.log(newdata);
  
}

//   fetch("http://localhost:8978/user",{
//     method : "POST",
//     "content-Type" : "application/json",
//     body : JSON.stringify(newdata) 
//   })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         alert("User Regestered");
//         console.log(data);
        
//     })
//     .catch((error) => {
//         alert("Something went wrong");
//         console.log(error);
        
//     });

