import React from "react";
import "./style.css";


function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" >
        <img alt={props.name} src={props.image} onClick={() => props.handleCount(props.id)}  />
      
      </div>
      <div className="content">
        
            <strong>Name:</strong> {props.name}
          
          </div>  
    </div>
  );
}

export default FriendCard;