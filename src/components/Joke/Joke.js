import React from 'react';
import avatar from './chuck-norris.png'
import './Joke.css';

//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

const Joke = (props) => {

    return (
        <div className="joke-item">
            <img src={avatar} className="avatar" alt="Chuck Norris"/>
            <p>{props.text}</p>
        </div>
    )
};

export default Joke;