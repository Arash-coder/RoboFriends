import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'
import Searchbox from './Searchbox';

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots:[],
            searchfield: ''
        }
    }
    componentDidMount(){
        this.setState({
            robots:robots
        })
    }
    onsearchchange =(event) =>{
        this.setState({searchfield:event.target.value})
        const filteredrobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredrobots);
    }
    render() {
        const filteredrobots = this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <CardList robots={filteredrobots} />
            </div>
        );
    }
}



export default App;