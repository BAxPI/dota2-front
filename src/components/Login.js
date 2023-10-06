import React from "react";
import axios from 'axios'
import '../css/form.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'

import { useRef, useState, useEffect} from 'react'
import useAuth from "../hooks/useAuth";

const Login = () => {
    const {setAuth} = useAuth() 

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const userRef = useRef()
    const errRef = useRef()

    const [usernameEmail, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')

    }, [usernameEmail, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/users/login", {usernameEmail, password})
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.token
            setAuth({user: usernameEmail, accessToken})

            setUsernameEmail('')
            setPassword('')
            navigate(from, {replace: true}) 
        } catch (e) {
            if (!e?.response) {
                setErrMsg('No server response')
            } else if (e.response?.status === 400) {
                setErrMsg('Wrong username or password')
            } else if (e.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login failed')
            }

            errRef.current.focus()
        }

    }
    return (
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
        )
    )
}

export default Login;