import React from 'react';
import App from './App';
import Github from "./images/github.png"
import "./initialdesign.css"

function InitialDesign({title, href}) {
    return (
        <React.Fragment>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                <App/>
            </main>
            <footer>
                <span>Created By: rohan-1-3</span>
                <a href={href}>
                    <img src={Github} alt="img" target="_blank"/>
                </a>
            </footer>
        </React.Fragment>
    );
}

export default InitialDesign;