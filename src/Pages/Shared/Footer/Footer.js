import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import logo from '../../../images/logo_white.webp'
import img_1 from '../../../images/footer-1.jpg'
import img_2 from '../../../images/footer-2.jpg'
import img_3 from '../../../images/footer-3.jpg'
import img_4 from '../../../images/footer-4.jpg'
const Footer = () => {
    return (
        <div className="pt-4" style={{backgroundColor:'#222732'}}>
            <Container>
            
            <Row>
                <Col xs={12} md={3} className="text-white text-start">
                <img className="w-50" src={logo} alt="" />
                <p style={{color:'grey',fontSize:'15px'}}>As the leading dealer in Chicago, we are confident that we will save you time and money. Motors is ultimate Automotive, Car Dealer WordPress theme.</p>
                
                <h6>SUBSCRIBE</h6>
                <InputGroup className="mb-3">
              <FormControl
               placeholder="Email Address"
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"
             />
              <InputGroup.Text className="bg-warning" id="basic-addon2">submit</InputGroup.Text>
             </InputGroup>
            <p style={{color:'grey',fontSize:'15px'}}>Get latest updates and offers.</p>
                </Col>
                <Col xs={12} md={3} className="text-white text-start">
                <h6>PHOTO GALLERY</h6>
                <Row>
                    <Col xs={3} md={3}>
                    <img className="img-fluid" src={img_1} alt="" />
                    </Col>
                    <Col xs={3} md={3}>
                    <img className="img-fluid" src={img_2} alt="" />
                    </Col>
                    <Col xs={3} md={3}>
                    <img className="img-fluid" src={img_3} alt="" />
                    </Col>
                    <Col xs={3} md={3}>
                    <img className="img-fluid" src={img_4} alt="" />
                    </Col>
                    
                </Row>
                <h6 className="mt-3">SALES HOURS</h6>
                    <p style={{color:'grey',fontSize:'15px'}}>Monday - Friday: 09:00AM - 09:00PM <br />
                       Saturday: 09:00AM - 07:00PM  <br />
                       Sunday: Closed</p>
                </Col>
                <Col className="text-white text-start" xs={12} md={3}>
                <h6>LATEST BLOG POSTS</h6>
                <p style={{color:'grey',fontSize:'15px'}}>The Tesla Model S isn’t the first truly autonomous car on the road...</p>
                <h6>SERVICE HOURS</h6>
                <p style={{color:'grey',fontSize:'15px'}}>Monday - Friday: 09:00AM - 09:00PM <br />
                   Saturday: 09:00AM - 07:00PM  <br />
                 Sunday: Closed</p>
                </Col>
                <Col className="text-white text-start" xs={12} md={3}>
                    <h6>SOCIAL NETWORK</h6>
                    <i style={{fontSize:'30px'}} className="fab fa-facebook-square me-2"></i>
                    <i style={{fontSize:'30px'}} className="fab fa-instagram-square me-2"></i>
                    <i style={{fontSize:'30px'}} className="fab fa-twitter-square"></i>
                    <h6 className="mt-4">PARTS HOURS</h6>
                    <p style={{color:'grey',fontSize:'15px'}}>Monday - Friday: 09:00AM - 09:00PM <br />
                   Saturday: 09:00AM - 07:00PM  <br />
                 Sunday: Closed</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Footer;