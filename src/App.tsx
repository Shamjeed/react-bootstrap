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
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Skills</a></li>
                    <li className="nav-item dropdown"><a data-toggle="dropdown" className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Projects</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Project 1</a>
                            <a className="dropdown-item" href="#">Project 2</a>
                            <a className="dropdown-item" href="#">Project 3</a>
                            <a className="dropdown-item" href="#">Project 4</a>
                            <a className="dropdown-item" href="#">Project 5</a>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Team</a></li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
