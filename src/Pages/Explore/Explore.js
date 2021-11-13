import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Car from "./Car/Car";

const Explore = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://nameless-reaches-52059.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  },[]);
  return (
    <div>
      <Header></Header>
      <Container className="py-3">
      <Row xs={1} md={3} className="g-4">
        {cars.map((car) => (
          <Car key={cars._id} car={car}></Car>
        ))}
      </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
