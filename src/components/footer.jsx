import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="section footer py-4 light-green-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto incidunt minus? Officia, repudiandae tempora sit explicabo laboriosam commodi aperiam itaque ad sunt praesentium adipisci vel, maiores culpa incidunt distinctio.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/" className="text-dark">Home</Link></div>
                        <div><Link to="/popular" className="text-dark">Recipes</Link></div>
                        <div><Link to="/about" className="text-dark">About</Link></div>
                        <div><Link to="/contact" className="text-dark">Contact</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="mb-1"></p>Lorem ipsum dolor sit amet.</div>
                        <div><p className="mb-1"></p>Lorem ipsum dolor sit amet.</div>
                        <div><p className="mb-1"></p>Lorem ipsum dolor sit amet.</div>
                        <div><p className="mb-1"></p>Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer
