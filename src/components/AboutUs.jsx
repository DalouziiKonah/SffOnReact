import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUs = ({ config }) => {
  const { 
    title, 
    subtitle, 
    description, 
    team, 
    mission, 
    values,
    teamTitle,
    missionTitle,
    valuesTitle
  } = config;

  const [showAllStaff, setShowAllStaff] = useState(false);
  const staffPerRow = 4;
  const maxVisibleCards = staffPerRow;
  const hasHiddenCards = team.length > maxVisibleCards;
  
  return (
    <Container className="py-5" id="about-us">
      {/* ... (other sections remain unchanged) ... */}
    {/* Header Section */}
    <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 fw-bold mb-3 text-light">{title}</h1>
          <p className="lead text-light">{subtitle}</p>
        </Col>
      </Row>

      {/* Description */}
      <Row className="justify-content-center mb-5">
        <Col lg={10}>
          <p className="fs-5 text-center text-light">{description}</p>
        </Col>
      </Row>

      {/* Mission and Values in Grid */}
      <Row className="g-4 mb-5">
        {/* Mission Card */}
        <Col lg={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <h2 className="h3 mb-4 fw-bold">{missionTitle}</h2>
              <p className="fs-5 mb-0">{mission}</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Values Card */}
        <Col lg={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <h2 className="h3 mb-4 fw-bold">{valuesTitle}</h2>
              <ul className="list-unstyled fs-5">
                {values.map((value, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {value}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-4" id='staff'>
        <Col>
          <h2 className="h3 mb-4 fw-bold text-light">{teamTitle}</h2>
          <Row className="g-4">
            {team.map((member, index) => (
              <Col 
                xs={12} 
                sm={6} 
                md={4} 
                lg={3} 
                key={index}
                className={!showAllStaff && index >= maxVisibleCards ? 'd-none' : ''}
              >
                <Card className="h-100 border-0 shadow-sm position-relative">
                  <Card.Img 
                    variant="top" 
                    src={member.image || 'https://via.placeholder.com/150'} 
                    alt={member.name}
                    className="object-fit-cover"
                    style={{ height: '200px' }}
                  />
                  <Card.Body className="p-3">
                    <Card.Title className="fw-bold mb-1">{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted small">
                      {member.position}
                    </Card.Subtitle>
                    <Card.Text className="small">{member.bio}</Card.Text>
                    
                    {/* Show More Button on 4th card */}
                    {index === maxVisibleCards - 1 && hasHiddenCards && !showAllStaff && (
                      <div className="position-absolute bottom-0 start-0 w-100 p-3">
                        <div className="position-relative">
                          {/* Peek effect overlay */}
                          <div className="position-absolute bottom-0 start-0 w-100 h-100 peek-overlay"></div>
                          <Button 
                            variant="outline-light" 
                            className="w-100 position-relative"
                            onClick={() => setShowAllStaff(true)}
                          >
                            +{team.length - maxVisibleCards} More
                          </Button>
                        </div>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Show Less Button */}
          {showAllStaff && (
            <div className="text-center mt-4">
              <Button 
                variant="outline-light" 
                onClick={() => setShowAllStaff(false)}
              >
                Show Less
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;