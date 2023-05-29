import React from 'react'
import { useContext } from 'react'
import context from '../my_context';
import {Row, Col, Card, ListGroup, Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Home() {

  const {pizzas, incrementarCarrito}  = useContext(context);
  const navigate = useNavigate();
  return (
    <div>
      {!pizzas ? (
        <div>...</div>
      ) : (
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} xs={10} md={6} lg={4} className="mb-3">
              <Card>
                <Card.Img src={pizza.img} />
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                  <ListGroup>
                    {pizza.ingredients.map((ingredient, index) => (
                      <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <Button variant="info" onClick={() => navigate("pizza/"+pizza.id)}>Ver más</Button>
                    <Button variant="danger" onClick={() => incrementarCarrito(pizza.id)}>Añadir</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Home