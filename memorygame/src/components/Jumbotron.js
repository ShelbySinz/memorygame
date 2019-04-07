import React from "react";

const styles = {
jumbotron: {
   textAlign: "center",
   background: "lightBlue"
}
}
function Jumbotron() {
  return (
    <div className="jumbotron" style = {styles.jumbotron}>
      <h1 >Clicky Game</h1>
      <p>
        Click on an image earn a point but becareful if you click on the same image you lose!
      </p>
    </div>
  );
}

export default Jumbotron;
