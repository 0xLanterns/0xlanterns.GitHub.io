import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import "../style/technology.css";
import Image from "./ImageTech";


const founders = [
  {
    name: 'Zouvier',
    image:'https://avatars.githubusercontent.com/u/63173892?s=400&u=714e14e0790558d4179ae5a2ae10b9eab9ba50ca&v=4',
    github: 'https://github.com/zouvier',
    twitter: 'https://twitter.com/ZoumanaCisse6',
    linkedin: 'https://www.linkedin.com/in/zoumanacisse/'
  },
  {
    name: 'Kiki',
    image:'https://i.imgur.com/TndOFH6h.jpg',
    github: 'https://github.com/devNamedKiki',
    twitter: 'https://twitter.com/Kiki_developer',
    linkedin: 'https://www.linkedin.com/in/kiki-brown-2191a525b/'
  }
  // Add more founders as needed
];

const Founders = () => {
  return (
    <Container className="founders-container">
      <div className='centered'><p className='card-title'> 0xLanterns </p></div>
      <Row className='founder-layout'>
        {founders.map((founder, index) => (
          <Col key={index} sm="6" md="4">
            <Card>
              <CardBody className="founder-card">
                <Image className="pictures"  im={founder.image} />
                <CardTitle className='card-title'  tag="p">{founder.name}</CardTitle>
                <Row className='links'>
                
                <CardText><a className='texts' href={founder.github} target="_blank" rel="noreferrer">GitHub</a></CardText>
                
                <CardText><a className='texts' href={founder.twitter} target="_blank" rel="noreferrer">Twitter</a></CardText>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Founders;
