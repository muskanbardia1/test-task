import React from 'react';
import "./style.css";

function ChessBoard() {
  const NUMBER_OF_BOXES=64;
  const [state, setState] = React.useState(null);
  const determineItemStyle=(i)=> {
    setState(i)
    // const isItemSelected = this.state.selectedItem === i;
    // return isItemSelected ? "clicked" : "";
  }
  return (
    <div className="container">
      <div className="chess-box">
        <div className="board">
        {Array.from(Array(NUMBER_OF_BOXES), (e, i) => {
    return <div key={i} className={state === i?`box clicked`:"box"} onClick={()=>determineItemStyle(i)}></div>
  })}
          
        </div>
      </div>
      
    </div>
  );
}

export default ChessBoard;
