import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

import { Monster } from './models/monster.model';
import { SearchBox } from './components/search-box/search-box.component';



interface Props {}

interface State {
  monsters: Monster[];
  searchText: string;
}

export default class App extends React.Component<Props,State> {

  state: State = {
    monsters: [],
    searchText: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}));
  }

  changeSearchText = (value: string) => {
    this.setState({searchText: value});
  }

  getFilteredMonsters(monsters: Monster[], searchText: string): Monster[] {
    return monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()));
  }

  render() {
    const { monsters, searchText }  = this.state;
    const filteredMonsters = this.getFilteredMonsters(monsters, searchText);
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={(e) => this.changeSearchText(e.target.value)} />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

