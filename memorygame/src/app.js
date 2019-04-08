import React from "react";
import Navbar from "./components/nav";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard/card"
import Wrapper from "./components/Wrapper";
import office from "./friends.json"


 


class App extends React.Component {
 
  
  state = {
		office: office,
		message: "Click a picture to begin!",
		score: 0,
    topScore: 0,
    clicked:  []
  };
 
  
  handleCount = (id) => {
  
   function sortIt(a,b){
     return 0.5 - Math.random();
   }
      if (this.state.clicked.indexOf(id) === -1){
    this.setState({ score: this.state.score + 1, office: office.sort(sortIt), message: "You are on a roll!", clicked: this.state.clicked.concat(id) });
    
  } else if( this.state.score >= 9){
    this.setState({ score: 0, message: "You Won!", topScore: this.state.score > this.state.topScore ? this.state.score: this.state.topScore, clicked: [] })
  }
    
    else {
      this.setState({score: 0, message: "You Lost!", topScore: this.state.score > this.state.topScore ? this.state.score: this.state.topScore, clicked: [] })
    }
  
  }; 

render(){
  return (
    <div className="container">
   
      <Navbar 
      correct={this.state.score}
      topscore={this.state.topScore}
      message = {this.state.message}
      />
      <Jumbotron />
      <Wrapper>
      
      {this.state.office.map(friend => ( 

      <FriendCard
      id = {friend.id}
      name={friend.name}
      image={friend.image}
      key={friend.id}
      handleCount = {this.handleCount}
      clicked = {this.state.clicked}
      />
      ))
      
      }
   
   
      </Wrapper>
      
  </div>
  );
}
}
export default App;