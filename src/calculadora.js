// import React from 'react'
import './calculadora.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Calculadora() {
  return (
    <Container fluid style={{
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
      }}>
      <Row>
        <Col xs="3"> 
          <Button variant='danger'>C</Button>
        </Col>
        <Col xs="9"> 
           <Form.Control type='text'
           name='txtNumeros'
           class='text-right'
           readOnly='readonly' />
        </Col>
      </Row>
    </Container>
  );
}

export default Calculadora;
