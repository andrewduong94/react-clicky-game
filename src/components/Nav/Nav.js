//set up Nav bar component 
import React from "react"
import "./Nav.css"

const NavBar = props => (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li id="title">DBZ Clicky Game</li>

                    <li id="msg">Status: {props.msg}</li>

                    <li id="score">Score: {props.score}</li>

                    <li id="highScore">High Score: {props.highScore}</li>
                    
                    </ul>
                </div>
            </nav>
        );


export default NavBar;