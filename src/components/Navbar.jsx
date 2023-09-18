import React from "react"

export default function Navbar(props){

    return(
        <nav className={props.darkMode ? "dark": ""}> 
            <img alt="React Logo" className="nav--logo--icon" src="./src/images/react-logo.jpeg" />
            <h3 className="nav--logo--text">React Facts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}