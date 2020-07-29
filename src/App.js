import React, { useState } from 'react'
import './App.css';
import SquareBoard from './components/SquareBoard';
import ColorMeInput from './components/ColorMeInput';
import { Container, Row, Col } from 'reactstrap';
function ColorMeApp() {
  const [selectedNumber, setSelectedNumber] = useState(0);
  return (
    <div className="ColorMeApp">
    <h1 style={{textAlign: 'center'}}>Color Me App</h1>
      <div className="board">
        <Container>
        <Row>
          <Col>
          <ColorMeInput setSelectedNumber={(number) => {
            setSelectedNumber(parseInt(number));
          }}/>
          </Col>
          <Col>
          <SquareBoard selectedNumber={selectedNumber} />
          </Col>
        </Row>
        </Container>
        
        </div>
        <div className="name">
                <h6>Developed by Shubham Kr.</h6>
            </div>
      </div>
  );
}

export default ColorMeApp;
