import React from "react";
import background from "../background.jpg";

const styles = {
jumbotron: {
   textAlign: "center",
   backgroundSize: "100%",
   backgroundPosition: "center",
   backgroundRepeat: "noRepeat",
   color: "white",
   backgroundImage: `url( ${background}) `
}
}
function Jumbotron() {
  return (
    <div className="jumbotron" style = {styles.jumbotron}>
     <br></br>
      <h1 >Memory Game</h1>
     <strong> <p>
        Click on an image earn a point but becareful if you click on the same image you lose!
      </p></strong>
      <br>
     </br>
     <br>
     </br>
    </div>
  );
}

export default Jumbotron;
