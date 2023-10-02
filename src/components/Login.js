import React, { Component } from "react";
import axios from 'axios'
import '../css/form.css'
import {Navigate} from 'react-router-dom'

import { useRef, useState, useEffect } from 'react'


const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [usernameEmail, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')

    }, [usernameEmail, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUsernameEmail('')
        setPassword('')

        setSuccess(true)

    }
    return (
        <>
        {success ? 
        (<Navigate to="/home" replace="true"/>) : 
        (<div className="body">
            <div className="container">
                <h1 className="pageTitle">Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username-email">Enter E-mail or username</label>
                    <input type="text" id="username-email" placeholder="username@email.com" ref={userRef} value={usernameEmail}
                        onChange={(e) => setUsernameEmail(e.target.value )} autoComplete="off" required/>
                    <label htmlFor="password">Enter password</label>
                    <input type="password" id="password" placeholder="17xj91k!$" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="signup-login-btn"> Login </button>
                </form>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <a href="/signup" className="have-dont-acc-btn"> Don't have an account? Create one now!</a>
            </div>
        </div>
        )}
        </>
    )
}
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             usernameEmail: "",
//             password: "",
//             errMsg: ""
//         };
//     }


//     handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent the default form submission

//         const { usernameEmail, password } = this.state;


//         try {
//             const response = await axios.post("http://localhost:3000/users/login", { emailOrUsername: usernameEmail, password});
//             console.log(response)
//         } catch (e) {

//         }
//         // Reset the form fields if needed
//         this.setState({
//             usernameEmail: "",
//             password: ""
//         });
//     }

//     render() {
//         return (
//             <div className="body">
//                 <div className="container">
//                     <h1 className="pageTitle">Login</h1>
//                     <form onSubmit={this.handleSubmit}>
//                         <label htmlFor="username-email">Enter E-mail or username</label>
//                         <input type="text" id="username-email" placeholder="username@email.com" value={this.state.usernameEmail}
//                             onChange={(e) => { this.setState({ usernameEmail: e.target.value }) }} autoComplete="off" />
//                         <label htmlFor="password">Enter password</label>
//                         <input type="text" id="password" placeholder="17xj91k!$" value={this.state.password}
//                             onChange={(e) => this.setState({ password: e.target.value })} />
//                         <button type="submit" className="signup-login-btn"> Login </button>
//                     </form>
//                     <a href="/signup" className="have-dont-acc-btn"> Don't have an account? Create one now!</a>
//                 </div>
//             </div>
//         );
//     }
// }

export default Login;