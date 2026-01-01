import React from "react";
import ControlledCarousel from "../components/carousel";
import Button from 'react-bootstrap/Button';

function Home(){
    return(
        <div>
           <ControlledCarousel/>

           <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Recipes</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facilis maxime rem incidunt alias? Laudantium nihil ea debitis dolorem aut!
                            </p>
                            <Button variant="success" href="#">Link</Button>
                        </div>
                    </div>
                </div>
           </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Vision, Mission and Values</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Vision</h6>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, beatae consequatur vel magnam aspernatur quisquam corporis vitae neque molestiae adipisci!
                            </p>
                        </div>
                    </div>
                </div>
           </section>



        </div>
    )
}

export default Home;