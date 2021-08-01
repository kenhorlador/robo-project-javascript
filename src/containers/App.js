import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';
// import Robots from '..'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // componentDidMount() {
    //   fetch('http://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {this.setState({ robots:users }) })
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        // Fetch Robots API
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots:users }) })

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // Loading screen
        if (this.state.robots.length === 0) {
            return <h3 className='tc'>Loading...</h3>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1 loading-circle'>RoboFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>               
                </div>
            );
        }    
    }
}

export default App;

// https://archive.thehated3.workers.dev/0:/AlgoExpert.io/150%20Interview%20Problems/