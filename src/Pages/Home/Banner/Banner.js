import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/banner.webp'
const Banner = () => {
    return (
        <div className="py-5 text-white" style={{backgroundColor:'#222732'}}>
            <Container>
            
            <Row>
            <Col xs={12} md={6} className="text-start">
            <h1 style={{fontSize:'60px'}}>Find your <br /> dream car</h1>
            <p>We can help you find the best car. Check our reviews, compare models and find cars for sale</p>
           <NavLink to="/explore"><Button variant="outline-info">Explore</Button></NavLink>
            </Col>
            <Col  xs={12} md={6}>
            <img className="img-fluid w-75" src={banner} alt="" />
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;