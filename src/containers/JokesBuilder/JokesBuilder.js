import React, {Component, Fragment} from 'react';
import './JokesBuilder.css';
import Joke from "../../components/Joke/Joke";
import BtnAddJoke from "../../components/BtnAddJoke/BtnAddJoke";


class JokesBuilder extends Component {

    state = {
        jokes: []
    };

    componentDidMount() {
        const JOKES_URL = 'https://api.chucknorris.io/jokes/random';
        const urls = [JOKES_URL, JOKES_URL, JOKES_URL];

        Promise.all(urls.map(url => fetch(url))).then(responses => {
            Promise.all(responses.map(response => {
                if(response.ok){
                    return response.json();
                }
                throw new Error('Something went wrong with network request');
            })).then(newJokes => {
                this.setState((prevState) => {
                    return {jokes: newJokes}
                })
            }).catch(error => {
                console.log(error);
            })
        })
    }

    addNewJokes = () => {
        const JOKES_URL = 'https://api.chucknorris.io/jokes/random';

        fetch(JOKES_URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        }).then(joke => {
            let jokes = [...this.state.jokes];
            jokes.push(joke);
            this.setState({jokes});
        }).catch(error => {
            console.log(error)
        })
    };

    render() {

        let btnAddNewJoke = null;

        if (this.state.jokes.length > 0) {
           btnAddNewJoke = (
               <BtnAddJoke click={this. addNewJokes}/>
           )
        }

        return(
            <Fragment>
                <div className="jokes-block">
                    <h2>Jokes from Chuck Norris:</h2>
                    {this.state.jokes.map(joke => {
                        return (
                            <Joke text={joke.value} key={joke.id}/>
                        )
                    })}
                </div>
                {btnAddNewJoke}
            </Fragment>
        )
    }
}

export default JokesBuilder;