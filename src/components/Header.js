import React, {Component} from "react";
import '../css/header.css'

class Header extends Component {

    render() {
        return (
            <div className="header">
               <img className="logo" src="baxpi.png" alt="logo"/> 
            </div>
        );
    }

}

export default Header