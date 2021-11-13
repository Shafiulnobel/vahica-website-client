import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Car from '../../Explore/Car/Car';

const FeaturedCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://nameless-reaches-52059.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  },[]);
    return (
        <div>
    <Container className="py-3">
        <h1>Most Featured Cars in The World in 2021</h1>
        <h6 className="text-warning">Featured Cars</h6>
      <Row xs={1} md={3} className="g-4">
        {
         cars.length===0 ? 
         <div className="d-flex justify-content-center">
           <Spinner animation="border" />
         </div>
         :
        cars.slice(0,6).map((car) => (
          <Car key={cars._id} car={car}></Car>
        ))}
      </Row>
      </Container>  
        </div>
    );
};

export default FeaturedCar;