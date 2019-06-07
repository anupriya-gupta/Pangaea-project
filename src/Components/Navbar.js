import React from 'react'
import "./nav.css"
import twitter from "../twitter.png"


export default function NavbarFun() {
    return (
        <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">

            <div className="navbar-header">
            <div className="twitter">
            <img src={twitter} alt="Logo" width={30} height={30} />
            </div>
            <a className="navbar-brand">Twitter 2.0</a>
           
            </div>

            <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Me</a></li>
            </ul>

            <form className="navbar-form navbar-right" action="/action_page.php">
            <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" name="search"/>
            <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
                <i className="glyphicon glyphicon-search"></i>
            </button>
            </div>
            </div>      
            </form>
        </div>
        </nav>
        </div>      
    )
}
