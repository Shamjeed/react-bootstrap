import React from 'react';
import './App.css';
import 'react-bootstrap';
import {faChild} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-dark">
                <a href="#"><FontAwesomeIcon className="text-warning fa-2x" icon={faChild}></FontAwesomeIcon></a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link text-light" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link text-light" href="#">Skills</a></li>
                    <li className="nav-item"><a className="nav-link text-light" href="#">Projects</a></li>
                    <li className="nav-item"><a className="nav-link text-light" href="#">Team</a></li>
                    <li className="nav-item"><a className="nav-link text-light" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
