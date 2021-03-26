import React, {Component} from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from "../components/Scroll"


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
        const {monsters, searchfield} = this.state;
        const filterArray = monsters.filter(item => {
            return item.name.toLowerCase().includes(searchfield.toLowerCase())         
        });
        //If we have a big array (monsters) and it takes longer to load it render Loading
        if (!monsters.length) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">Robots</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll >
                        <Cardlist monsters={ filterArray }/>
                    </Scroll>
                </div>
            )
        }
    }  
}

export default App;