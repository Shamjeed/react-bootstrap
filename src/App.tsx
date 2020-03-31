import React from 'react';
import './App.css';
import 'react-bootstrap';
import {faChild} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light">
                <a href="#"><FontAwesomeIcon className="text-warning fa-2x" icon={faChild}></FontAwesomeIcon></a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Team</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
