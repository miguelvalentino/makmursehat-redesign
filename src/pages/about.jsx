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
      bio: "Lorem ipsum dolor sit amet consectetur. Repellat cum distinctio quod error. Pariatur enim obcaecati illum nihil omnis sint ea. Velit odio, repellendus consequuntur exercitationem numquam hic id reprehenderit aliquam quia. Quae, nam tempore?" ,
      photo: "" 
    },
    {
      name: "Jane Smith",
      role: "Nutritionist",
      bio: "Lorem ipsum dolor sit amet consectetur. Repellat cum distinctio quod error. Pariatur enim obcaecati illum nihil omnis sint ea. Velit odio, repellendus consequuntur exercitationem numquam hic id reprehenderit aliquam quia. Quae, nam tempore?" ,
      photo: "" 
    },
    {
      name: "Peter Jones",
      role: "Food Photographer",
      bio: "Lorem ipsum dolor sit amet consectetur. Repellat cum distinctio quod error. Pariatur enim obcaecati illum nihil omnis sint ea. Velit odio, repellendus consequuntur exercitationem numquam hic id reprehenderit aliquam quia. Quae, nam tempore?",
      photo: "" 
    },
    {
      name: "Chris Green",
      role: "Community Manager",
      bio: "Lorem ipsum dolor sit amet consectetur. Repellat cum distinctio quod error. Pariatur enim obcaecati illum nihil omnis sint ea. Velit odio, repellendus consequuntur exercitationem numquam hic id reprehenderit aliquam quia. Quae, nam tempore?",
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
            <Col md={4} sm={6} key={index} className="mb-4">
              <Card className="team-card-redesigned">
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