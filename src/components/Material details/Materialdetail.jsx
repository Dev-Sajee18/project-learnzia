import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Box = ({ number }) => (
  <Col xs={4} sm={3} md={2} className="box" style={{ height: '100px', width: '100px', backgroundColor: 'lightblue', margin: '10px' }} key={number}>
    Listening pdf - {number}
  </Col>
);

const Boxes = () => {
  const boxes = [];
  for (let i = 1; i <= 30; i++) {
    boxes.push(<Box number={i} />);
  }
  return (
    <div style={{ width: '70%', height: '500px', margin: '0 auto', border: '2px solid black', padding: '10px', marginTop: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>LISTENING MATERIALS FOR ONE MONTH PREPARATION</h1>
      <Container>
        <Row>
          {boxes}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button className="btn saj rounded-pill" onClick={() => alert('Download clicked')} >
              Download all
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Boxes;
