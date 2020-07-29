import React from 'react'

export default function SquareBoard(props) {
  const renderSquare = (i) => {
    if(props.selectedNumber === i) {
      return (
        <div className="square" style={{ background: 'green' }}>
          {i}
        </div>
      );
    }
    return (
      <div  className="square">
        {i}
      </div>
    )
  }
  
  return (
    <div>
        <div className="board-row">
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
        <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
        <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>

  )
}
