import React from "react";
import ControlledCarousel from "../components/carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <div>
            <ControlledCarousel />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Recipes</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor deleniti nobis tempora, autem voluptates quibusdam expedita dicta explicabo, ab id beatae quasi nam. Repellat cum distinctio quod error. Pariatur enim obcaecati illum nihil omnis sint ea. Velit odio, repellendus consequuntur exercitationem numquam hic id reprehenderit aliquam quia. Quae, nam tempore?
                            </p>
                            <Button variant="success" href="#">Link</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Vision, Mission and Values</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Vision</h6>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, beatae consequatur vel magnam aspernatur quisquam corporis vitae neque molestiae adipisci!
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Mission</h6>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisic    ing elit. Esse, beatae consequatur vel magnam aspernatur quisquam corporis vitae neque molestiae adipisci!
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Values</h6>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, beatae consequatur vel magnam aspernatur quisquam corporis vitae neque molestiae adipisci!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Popular Recipes</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <Card className="popular" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        <Card className="popular" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Home;