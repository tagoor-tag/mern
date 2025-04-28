import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "./SignUp.css"

function SignUp() {

    
    const navigate = useNavigate();
    
    const [error, setError] = useState(false);
    const [user, setUser] = useState({
        first: "",
        last: "",
        gender: "",
        email: "",
        phone: "",
        password:"",
    })


    const getSignUser = () => {
        //vaidata the data : validation : Regex

        axios.post("http://localhost:1010/api/users/signup", user)
            .then((res) => {
                if (res.data.ok) {
                    
                    console.log('user created successfully')

                    navigate("/")
                    
                    console.log(res);
                    setUser({
                        first: "",
                        last: "",
                        gender: "",
                        email: "",
                        phone: "",
                        password:"",
                    })
                    setError(false)
                } else{
                    setError(true)
                    console.log('failed to created')
                }
            }).catch((error) => {
                console.log(error)
                setError(true)
            })
        

    }


    return (
        <div id='mainSignUp'>
            <div id="rightSignUp">
                <h2>Wellcome to ChatDUDE</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis esse dolore tempora aliquam dolorem accusamus, veniam eum natus aut est animi quisquam fuga possimus itaque nobis similique, deserunt voluptatum debitis quaerat sunt. Asperiores unde blanditiis culpa fugit aliquid ab ipsa, ad cum quod, deleniti ut, ipsam quo sed fugiat. Nesciunt!</p>

            </div>


            <div id="leftSignUp">
                <form>

                    <h1>Enroll New user</h1>
                    <div className='formFirst'>
                        <input type="text" name='first' placeholder='First Name' onChange={(event) => { setUser({ ...user, first: event.target.value }) }} value={user.first} />
                    </div>

                    <div className='formLast'>
                        <input type="text" name='last' placeholder='Last Name' onChange={(event) => { setUser({ ...user, last: event.target.value })}} value={user.last} />
                    </div>

                    <div className='formGender'>
                        <div className='formGenderMale'>
                            <input type="radio" name='gender' value='male' onChange={(event) => { setUser({ ...user, gender: event.target.value }) }} />
                            <label> Male</label>
                        </div>
                        <div className='formGenderFemale'>
                            <input type="radio" name='gender' value='female' onChange={(event) => { setUser({ ...user, gender: event.target.value }) }} />
                            <label>Female</label>
                        </div>
                        <div className='formGenderOther'>
                            <input type="radio" name='gender' value='other' onChange={(event) => { setUser({ ...user, gender: event.target.value }) }} />
                            <label> Others</label>
                        </div>
                    </div>

                    <div className='formEmail'>
                        <input type="email" name='email' placeholder='Email ID' onChange={(event) => {setUser({ ...user, email: event.target.value }) }} value={user.email} />
                    </div>

                    <div className='formPhone'>
                        <input type="text" name='phone' placeholder='Phone NO' maxLength={10} onChange={(event) => {setUser({ ...user, phone: event.target.value })}} value={user.phone} />
                    </div>

                    <div className='formPassword'>
                        <input type="password" name='password' placeholder='Password' onChange={(event) => {setUser({ ...user, password: event.target.value })}} value={user.password} />
                    </div>

                    <div className='formSubmit'>
                        <input type="button" name='submit' value="Submit" onClick={getSignUser} />
                    </div>

                    <p>Already,you account. <Link to={'/'} style={{color: 'blue', textDecoration: "none" ,background:'white' , borderRadius: 10, padding:10}} >Signin</Link></p>
                </form>


            </div>

            {error ? (
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ color: "red", fontSize: "28px" }}>
                        Failed to Create Account
                    </h2>
                </div>
            ) : null}
        </div>
    )
}

export default SignUp;