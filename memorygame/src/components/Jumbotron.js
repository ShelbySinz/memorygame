import React from "react";
import background from "../background.jpg";

const styles = {
jumbotron: {
   textAlign: "center",
   backgroundSize: "100%",
   backgroudPosition: "center",
   backgroundRepeat: "noRepeat",
   backgroundImage: `url( ${background}) `
}
}
function Jumbotron() {
  return (
    <div className="jumbotron" style = {styles.jumbotron}>
      <h1 >Memory Game</h1>
     <strong> <p>
        Click on an image earn a point but becareful if you click on the same image you lose!
      </p></strong>
    </div>
  );
}

export default Jumbotron;
