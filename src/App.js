import React, {Component} from 'react';
import Images from "./Images";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ImageSection from "./components/ImageSection";
import logo from './logo.svg';
import './App.css';



class App extends Component {
	state = {
    images: Images,
    clickedImages: [],
    score: 0,
    topScore: 0,
    feedback: "Click an image to begin!",
    gameStatus: 0 //gameStatus: 0 => game in progresss, 1 => game won, 2 => game lost
  };

  componentDidMount() {
    this.setState({
      images: this.shuffle(this.state.images)
    }, () => {
      console.log("Shuffled the images on game start");
    });
  }

  handleClick = event => {
    // console.log(event.target); // example output => <img class="col-md-3 col-sm-4 col-xs-12 pb-4 imageBlock" src="/static/media/alchemist.ce4808c0.png" alt="alchemist.png">
    // console.log(event.target.alt); // example output => alchemist.png
    const clickedImages = event.target.alt;
    // console.log("The clicked image is: " + clickedImages;
    // console.log("state BEFORE: " + JSON.stringify(this.state));
    const wasImageClickedBefore = this.imageClickedBefore(clickedImages);
    if (wasImageClickedBefore) {
      this.setState({
        images: this.shuffle(this.state.images),
        // images: this.state.images, //for debugging only
        clickedImages: [],
        score: 0,
        feedback: "You guessed incorrectly! Please try again.",
        gameStatus: 2
      }, () => {
        // console.log("IF block state AFTER GAME OVER: " + JSON.stringify(this.state));
      });
    } else {
      let newScore = this.state.score + 1;
      if (newScore === this.state.images.length) {
        this.setState({
        images: this.shuffle(this.state.images),
        // images: this.state.images, //for debugging only
          clickedImages: [],
          score: 0,
          topScore: newScore,
          feedback: "Congrats! You Have Guessed All Of The Images Correctly!",
          gameStatus: 1
          });
      } else {
        const clickedImagesCopy = this.state.clickedImages.slice();
        clickedImagesCopy.push(clickedImages);
        const newTopScore = (newScore > this.state.topScore) ? newScore : this.state.topScore;
        this.setState({
        images: this.shuffle(this.state.images),
        // images: this.state.images, //for debugging only
          clickedImages: clickedImagesCopy,
          score: newScore,
          topScore: newTopScore,
          feedback: "You guessed correctly!",
          gameStatus: 0
          }, () => {
          // console.log("IF block state AFTER CORRECT GUESS: " + JSON.stringify(this.state));
        });
      }
    }
  };

  imageClickedBefore = (clickedImages) => {
  	for (let index=0; index<this.state.clickedImages.length; index++) {
  		if (this.state.clickedImages[index] === clickedImages) {
        return true;
      }
    }
    return false;
  };

  // Fisher-Yates (aka Knuth) Shuffle algorithm implementation to shuffle images to display in the UI
  // Copied from stackoverflow post:
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
   return (
    <div>
      <Navbar score={this.state.score} topScore={this.state.topScore} feedback={this.state.feedback} gameStatus={this.state.gameStatus} />
      <Banner />
      <ImageSection images={this.state.images} clickHandler={this.handleClick} gameStatus={this.state.gameStatus} />
  
    </div>
    );
  }
}

export default App;