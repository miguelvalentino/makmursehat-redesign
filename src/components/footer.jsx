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
              Makmur Sehat adalah platform resep dan gaya hidup sehat yang membantu
              kamu menemukan menu bergizi, lezat, dan mudah dibuat setiap hari.
              Kami percaya bahwa hidup sehat dimulai dari pilihan makanan yang tepat.</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/" className="text-dark">Home</Link></div>
                        <div><Link to="/recipes" className="text-dark">Recipes</Link></div>
                        <div><Link to="/about" className="text-dark">About</Link></div>
                        <div><Link to="/contact" className="text-dark">Contact</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="mb-1"></p>📍 Address: 123 Health Ave, Wellness City, HW 54321</div>
                        <div><p className="mb-1"></p>📞 Phone: +1 (555) 123-4567</div>
                        <div><p className="mb-1"></p>📧 Email: info@makmursehat.com</div>
                        <div><p className="mb-1"></p>⏰ Hours: Mon-Fri: 9 AM - 5 PM</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer
