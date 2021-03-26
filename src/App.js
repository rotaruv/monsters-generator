import React, {Component} from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import "./App.css"
import Scroll from "./Scroll"


class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchfield: " "
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                 return response.json()
                 })
            .then(users => {
                this.setState({monsters: users})
            })
        }

    onSearchChange = (event) => {       
        this.setState({searchfield: event.target.value}) 
    }

    render() {
        const filterArray = this.state.monsters.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())         
        });

        if (this.state.monsters.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">Robots</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll style={{overflow: 'scroll', border: '5px solid black', height: "400px"}}>
                        <Cardlist monsters={ filterArray }/>
                    </Scroll>
                </div>
            )
        }
    }  
}

export default App;