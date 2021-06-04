import React, { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import "./App.css";
import Scroll from "../component/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      searchfield: " ",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ kittens: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { kittens, searchfield } = this.state;
    const filteredkittens = kittens.filter((kitten) => {
      return kitten.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !kittens.length ? (
      <h2 className="tc b i">loading...</h2>
    ) : (
      <div className="tc">
        <h1 className="f1">KITTEN CONTACT LIST</h1>
        <body className="f5">
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList kittens={filteredkittens} />
          </Scroll>
        </body>
      </div>
    );
  }
}

export default App;
