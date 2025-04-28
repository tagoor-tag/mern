import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Edit.css"


function Edit() {
  const { _id } = useParams();
  const navigate = useNavigate();

  // Initializing state with defaults to avoid undefined errors
  const [user, setuser] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
    phone: '',
    gender: ''
  });

  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    axios.get(`http://localhost:1010/api/users/getdata/${_id}`)
      .then((resp) => {
        if (resp.data.ok) {
          setuser(resp.data.results);  // Only set user data if it's valid
        }
        setLoading(false);  // Stop loading once data is fetched
      })
      .catch((error) => {
        console.log('Error fetching user data', error);
        setLoading(false);
      });
  }, [_id]);

  // If data is still loading, show a loading message or spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  const updatauser = () => {
    axios.put(`http://localhost:1010/api/users/update/${_id}`, user)
      .then((res) => {
        console.log('User updated successfully', res);
        navigate("/home");  // Navigate after successful update
      })
      .catch((error) => {
        console.log('Error updating user', error);
      });
  };

  return (
    <div>
      <div className='main'>
        <form id="container">
          <h1>Sign Up</h1>
          <div className='fromgroup'>
            <input
              onChange={(event) => {
                setuser({ ...user, first: event.target.value });
              }}
              type='text'
              value={user.first || ''}  // Provide default empty string to avoid undefined
              placeholder='Enter your first name'
            />
          </div>
          <div className='fromgroup'>
            <input
              onChange={(event) => {
                setuser({ ...user, last: event.target.value });
              }}
              type='text'
              value={user.last || ''}  // Handle undefined values
              placeholder='Enter your last name'
            />
          </div>
          <div className='fromgroup'>
            <input
              onChange={(event) => {
                setuser({ ...user, email: event.target.value });
              }}
              type='email'
              value={user.email || ''}
              placeholder='Enter your email'
            />
          </div>
          <div className='fromgroup'>
            <input
              onChange={(event) => {
                setuser({ ...user, password: event.target.value });
              }}
              type='password'
              value={user.password || ''}
              placeholder='Enter your password'
            />
          </div>
          <div className='radioone'>
            <div>
              <input
                onChange={(event) => {
                  setuser({ ...user, gender: event.target.value });
                }}
                type='radio'
                value="male"
                name='gender'
                checked={user.gender === 'male'}  // Ensure gender is selected based on state
              />
              <label>Male</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setuser({ ...user, gender: event.target.value });
                }}
                type='radio'
                value="female"
                name='gender'
                checked={user.gender === 'female'}
              />
              <label>Female</label>
            </div>
            <div>
              <input
                onChange={(event) => {
                  setuser({ ...user, gender: event.target.value });
                }}
                type='radio'
                value="other"
                name='gender'
                checked={user.gender === 'other'}
              />
              <label>Other</label>
            </div>
          </div>
          <div className='fromgroup'>
            <input
              onChange={(event) => {
                setuser({ ...user, phone: event.target.value });
              }}
              type='text'
              value={user.phone || ''}
              placeholder='Enter your phone number'
              maxLength={10}
            />
          </div>
          <div className='submitone'>
            <div><input type='button' value="Update" onClick={updatauser} /></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
