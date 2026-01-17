import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Progammer",
      bio: "John is responsible for building and maintaining the MakmurSehat platform from the ground up. He focuses on creating a fast, reliable, and user-friendly experience so visitors can easily discover recipes and cooking guides. With a strong passion for web development and clean code, he ensures that every feature runs smoothly and securely." ,
      photo: "" 
    },
    {
      name: "Jane Smith",
      role: "Nutritionist",
      bio: "Jane designs and reviews every recipe from a nutritional perspective. She ensures that each menu is balanced, healthy, and suitable for different lifestyles, including weight management and active living. Her goal is to help people enjoy delicious food while still meeting their daily nutritional needs." ,
      photo: "" 
    },
    {
      name: "Peter Jones",
      role: "Food Photographer",
      bio: "Peter brings every dish to life through visual storytelling. He specializes in capturing the natural colors and textures of food to make recipes look as appetizing as they taste. His work helps users feel inspired to cook and confident to try new healthy meals at home.",
      photo: "" 
    },
    {
      name: "Chris Green",
      role: "Community Manager",
      bio: "Chris manages the MakmurSehat community and keeps communication flowing between users and the team. He handles feedback, suggestions, and questions while fostering a positive and supportive environment. His mission is to make every visitor feel welcome and motivated to stay consistent with healthy eating.",
      photo: "" 
    }
  ];

  const getInitials = (name) => {
    return name
      .match(/(\b\S)?/g)
      .join("")
      .match(/(^\S|\S$)?/g)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="about-page">
      <div className="about-hero py-5 mb-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold text-brand-primary">More Than Just Recipes</h1>
          <p className="lead text-secondary">
            At MakmurSehat, we believe healthy food shouldn't be boring.
          </p>
          <p className="mt-4 mx-auto about-history-text">
            Founded in 2020 by a group of passionate food enthusiasts, MakmurSehat started as a small blog dedicated to sharing nutritious and delicious recipes. Our mission quickly evolved as we realized the growing need for accessible, wholesome meal ideas that cater to diverse tastes and dietary requirements. Over the years, we've grown into a vibrant community, continuously striving to inspire healthier eating habits without compromising on flavor or joy. We are committed to empowering individuals to make informed food choices and enjoy every bite on their journey to a healthier lifestyle.
          </p>
        </Container>
      </div>

      <Container className="mb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">The Kitchen Behind the Curtain</h2>
          <div className="about-underline"></div>
          <p className="text-muted">The people obsessed with making you full and healthy.</p>
        </div>

        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={4} sm={6} key={index} className="mb-4 d-flex">
              <Card className="team-card-redesigned h-100">
                <div className={`profile-placeholder shadow-sm ${member.photo ? 'has-photo' : ''}`}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="profile-img" />
                  ) : (
                    <span className="profile-initials">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>
                <Card.Body>
                  <Card.Title className="team-card-name">{member.name}</Card.Title>
                  <Card.Subtitle className="team-card-role">{member.role}</Card.Subtitle>
                  <hr className="my-3" />
                  <Card.Text className="team-card-bio">
                    {member.bio}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default About;