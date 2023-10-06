import React, {Component} from "react";
import '../css/header.css'
import {Link} from 'react-router-dom'
class Header extends Component {

    render() {
        return (
            <div className="header">
               <img className="logo" src="baxpi.png" alt="logo"/> 
               {/* <Link to="/About"> About </Link> */}
               {/* <Link to="/"> Home </Link> */}
            </div>
        );
    }

}

export default Header