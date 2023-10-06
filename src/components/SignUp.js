import React, { Component } from "react";
import axios from 'axios'
import '../css/form.css'
import {useNavigate} from 'react-router-dom'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            steamid: "",
            password: "",
            verifyPassword: ""
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, username, steamid, password, verifyPassword } = this.state
        const navigate = useNavigate()

        try {
            if (password === verifyPassword) {
                const requestBody = {
                    firstname,
                    lastname,
                    email,
                    username,
                    steam32_id: steamid,
                    password
                }
                console.log(requestBody)
                const response = await axios.post("http://localhost:3000/users", requestBody)
                console.log(response)
                if (response.status === 201) {
                    navigate("/login")
                }
                
            }
        } catch (e) {
            console.log(e)
        }
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            steamid: "", 
            password: "",
            verifyPassword: ""
        })
    }
    render() {
        return (
            <div className="body">
                <div className="container">
                    <h1 className="pageTitle"> Sign up</h1>
                    <form onSubmit={this.handleSubmit}>
                        {/* First name */}
                        <label htmlFor="firstname">First name</label>
                        <input type="text" id="firstname" placeholder="Albert" value={this.state.value}
                            onChange={(e) => this.setState({ firstname: e.target.value })} required autoComplete="off"/>
                        {/* Last Name  */}
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" id="lastname" placeholder="Einstein" value={this.state.value}
                            onChange={(e) => this.setState({ lastname: e.target.value })} />
                        {/* Username */}
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="DotaPlayer33" value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })} />
                        {/* E-mail */}
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" placeholder="username@email.com" value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }) }} required />
                        {/* Steam ID */}
                        <label htmlFor="steamid">Steam ID</label>
                        <input type="text" id="steamid" placeholder="12398401" value={this.state.steamid}
                            onChange={(e) => {this.setState({steamid: e.target.value})}} required />
                        {/* Password */}
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="15ykasl%" value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })} required />
                        {/* Verify Password */}
                        <label htmlFor="verify-password">Verify password</label>
                        <input type="password" id="verify-password" placeholder="15ykasl%" value={this.state.verifyPassword}
                            onChange={(e) => this.setState({ verifyPassword: e.target.value })} required/>

                        <button type="submit" className="signup-login-btn"> Sign Up </button>
                    </form>
                    <a href="/login" className="have-dont-acc-btn">Already have an account? login now!</a>
                </div>
            </div>
        );
    }
}

export default SignUp