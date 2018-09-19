import React, { Component } from 'react';
import Navbar from "./components/Nav";
import FriendCard from "./components/FriendCard";
import characters from "./characters.json"
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Title from "./components/Title";
import './App.css';


function randomize(array) {
  let temp = null;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
};

class App extends Component {
  state = {
    characters,
    level: "Saiyan",
    score: 0,
    highScore: 0,
    msg: "",
    clicked: [],
  }


  randomizeCharacters = () => {
    let mixedCharacters = randomize(characters);
    this.setState({ characters: mixedCharacters });
  };

  setScore = () => {
    const currentScore = this.state.score + 1;
    this.setState({
      score: currentScore,
      msg: "Good!"
    });
    if (currentScore >= this.state.highScore) {
      this.setState({ highScore: currentScore })
    }
    if (currentScore === 12) {
      this.setState({ 
        msg: "You win!",
        level: "Super Saiyan Rose"
     });
    }
    if (currentScore === 2) {
      this.setState({ level: "Super Saiyan" })
    }
    else if (currentScore === 3) {
      this.setState({ level: "Super Saiyan 2" })
    }
    else if (currentScore === 4) {
      this.setState({ level: "Super Saiyan 3" })
    }
    else if (currentScore === 6) {
      this.setState({ level: "Super Saiyan 4" })
    }
    else if (currentScore === 8) {
      this.setState({ level: "Super Saiyan God" })
    }
    else if (currentScore === 10) {
      this.setState({ level: "Super Saiyan Blue" })
    }
    this.randomizeCharacters();
  };

  reset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      msg: "Oops!",
      clicked: [],
      level: "Saiyan"
    });
    this.randomizeCharacters();
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.reset();
    }
  };

render() {
  return (
    <Wrapper>
    <Navbar
      score = {this.state.score}
      highScore = {this.state.highScore}
      msg = {this.state.msg}
      level = {this.state.level}
    />
    <Title>Click on every character without clicking on the same character twice!</Title>
    <Row>
    {this.state.characters.map(character => (
    <FriendCard
      key = {character.id}
      id = {character.id}
      image = {character.image}
      handleClick={this.handleClick}
      />
    ))}
    </Row>
    </Wrapper>
  );
}
}



export default App;
