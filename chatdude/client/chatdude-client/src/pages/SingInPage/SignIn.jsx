import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import "./SignIn.css"


function SignIn() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })



    const navigate = useNavigate();

    const checkData = () => {

        axios.post("http://localhost:1010/api/users/signin", user)
            .then((res) => {
                // console.log(res.data)
                let dbuser = res.data.results

                if (user.email === dbuser.email && user.password === dbuser.password) {
                    toast(res.data.message, {
                        style: { color: "green" }
                    })
                    localStorage.setItem("Token", res.data.authToken )
                    navigate("/home")
                } else if (user.email === dbuser.email && user.password !== dbuser.password) {
                    toast("Password wrong", {
                        style: { color: "orange" }
                    })
                } else {
                    console.log(res.data.message);
                }

            }).catch((error) => {
                console.log(error)
                toast("user is invailed", {
                    style: { color: "red" }
                })
            })

    }

    return (
        <div id='signin-form'>
            <form action="">
                <div id='title-signin'>
                    <h1>Wellcome back to ChatDUDE</h1>
                    <h3>Sign-In</h3>
                </div>
                <div id='email-signin'>
                    <input type="email" name="email" placeholder='Enter your Email Id' value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                </div>

                <div id='password-signin'>
                    <input type="password" name='password' placeholder='Enter your password' value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </div>

                <div id='submit-signin'>
                    <input type="button" value={"Submit"} onClick={checkData} />
                </div>

                <div id='link-to-signup'>
                    <p>Don't have you account. <Link to='/signup' style={{color: 'blue', textDecoration: "none" ,background:'white' , borderRadius: 10, padding:10}} >Signup</Link> </p>
                </div>
            </form>

        </div>
    )
}

export default SignIn;