import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Allfeedbacks.css"


function Allfeedbacks() {
  let [feedbacks, setfeedbacks] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8989/getfeedback")
      .then((res) => {
        console.log(res);
        
        setfeedbacks(res.data.results);
      }).catch((error) => {
        alert("failed to get users");
        console.log(error);
      });
  },[])

  return (
    <div  id='allfeedbacks'>
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Qulity Of Course</th>
            <th>Explaining</th>
            <th>Material</th>
            <th>Topics</th>
            <th>Curse To Other</th>
          </tr>

        </thead>
        <tbody>

          {feedbacks.map((elment, index) => {
            return (
              <tr key={index}>
                <td>{elment._id}</td>
                <td>{elment.name}</td>
                <td>{elment.phone}</td>
                <td>{elment.qualityOfCourse}</td>
                <td>{elment.explaining}</td>
                <td>{elment.material}</td>
                <td>{elment.topics}</td>
                <td>{elment.courseToOther}</td>
                <td><button>Delete</button></td>
              </tr>
            )
          })
          }
        </tbody>

      </table>
    </div>
  )
}

export default Allfeedbacks