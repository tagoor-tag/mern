import React, { useState } from 'react'
import "./Feedbackform.css"
import axios from 'axios';

function Feedbackform() {

  const [newfeedback, setNewfeedback] = useState({
    name: "",
    phone: "",
    qualityOfCourse: "",
    explaining: "",
    material: "",
    topics: "",
    courseToOther: ""
  })


  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   console.log(value)
  //   setNewfeedback(...Feedbackform.value)
  // }
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value
    setNewfeedback(prevState => ({
      ...prevState,
      [name]: value // Dynamically update the field based on the name
    }));
  };

  const handleSubmitFeedbackform = () => {
    const payload = {
      name: newfeedback.name,
      phone: newfeedback.phone,
      qualityOfCourse: newfeedback.qualityOfCourse,
      explaining: newfeedback.explaining,
      material: newfeedback.material,
      topics: newfeedback.topics,
      courseToOther: newfeedback.courseToOther

    }

    console.log(payload)

    //post api call

    axios.post("http://localhost:8989/newfeedback", payload)
  }




  return (
    <form className="form-container">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newfeedback.name}
          className="input-field"
          required
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          className="input-field"
          required
          value={newfeedback.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>1. What did you think of the course content?</label>
        <textarea
          name="qualityOfCourse"
          value={newfeedback.qualityOfCourse}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>

      <div className="form-group">
        <label>2. Was the instructor's teaching style effective?</label>
        <textarea
          name="explaining"
          className="input-field"
          required
          value={newfeedback.explaining}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>3. How would you rate the course materials?</label>
        <textarea
          name="material"
          value={newfeedback.material}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>

      <div className="form-group">
        <label>4. Do you feel confident applying what you've learned?</label>
        <textarea
          name="topics"
          value={newfeedback.topics}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>

      <div className="form-group">
        <label>5. What suggestions do you have for improving the course?</label>
        <textarea
          name="courseToOther"
          value={newfeedback.courseToOther}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>

      <div className="form-group">
        <button type="submit" className="submit-btn" onClick={handleSubmitFeedbackform}>Submit</button>
      </div>
    </form>
  )
}

export default Feedbackform;