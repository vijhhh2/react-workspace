import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  changeSearchText = (value) => {
    this.setState({ searchText: value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const {monsters, searchText} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={(e) => this.changeSearchText(e.target.value)} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
