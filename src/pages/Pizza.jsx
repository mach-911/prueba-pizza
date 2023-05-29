import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import context from '../my_context';
import { Row, Col, Button } from 'react-bootstrap';

function Pizza() {

  const {id} = useParams();
  const {getPizza} = useContext(context);
  const {name, img, ingredients, price, desc} = getPizza(id);

  return (
    <Row>
      <Col lg={4}>
        <img src={img} alt={name} className='w-100 h-100' style={{objectFit: "cover"}} />
      </Col>
      <Col lg={8}>
        <h2>{name}</h2>
        <p className="mt-4">{desc}</p>
        <h3>Ingredientes</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <div className="d-flex justify-content-between">
          <div className="fs-4">$ {price}</div>
          <Button variant="danger">Añadir</Button>
        </div>
      </Col>
    </Row>
  );
}

export default Pizza;