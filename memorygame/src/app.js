import React from "react";
import Navbar from "./components/nav";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard/card"
import Wrapper from "./components/Wrapper";
import office from "./friends.json"

 


class App extends React.Component {
 
  state = {
		office: office,
		message: "Click one of the logos to begin!",
		score: 0,
		topScore: 0
  };
  
  handleCount = () => {
    this.setState({ score: this.state.score + 1, office: office.reverse() });
    
  }; 


render(){
  return (
    <div className="container">
   
      <Navbar 
      correct={this.state.score}
      topscore={this.state.newTopScore}
      message = {this.state.message}
      />
      <Jumbotron />
      <Wrapper>
      
      {this.state.office.map(friend => ( 

      <FriendCard
      name={friend.name}
      image={friend.image}
      key={friend.id}
      handleCount = {this.handleCount}
      />
      ))
      }
   
   
      </Wrapper>
      
  </div>
  );
}
}
export default App;