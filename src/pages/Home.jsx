import React from "react";
import ControlledCarousel from "../components/carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import quinoaImage from '../assets/quinoa.jpg';
import buahNaga from '../assets/buah naga.jpg'
import pepesIkan from '../assets/pepes-ikan-kembung-foto-resep-utama.jpg'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

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
                                Nikmati berbagai pilihan resep sehat yang dirancang untuk mendukung gaya hidup aktif dan seimbang.
                                Setiap menu kami disusun dengan bahan berkualitas, rendah lemak, dan kaya nutrisi tanpa mengorbankan cita rasa.

                                Mulai dari menu utama, camilan sehat, hingga minuman segar, semua resep dapat kamu temukan dengan langkah memasak yang mudah dan praktis untuk diterapkan di rumah.

                                Mari mulai perjalanan hidup sehatmu hari ini, satu piring demi satu piring.

                            </p>
                            <Button variant="success" onClick={() => navigate("/recipes")}>Lihat semua resep</Button>
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
                                Menjadi platform resep sehat terpercaya yang menginspirasi masyarakat untuk menjalani pola makan seimbang, lezat, dan berkelanjutan demi kualitas hidup yang lebih baik.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Mission</h6>
                            <p>
                                Menyediakan resep sehat yang mudah diakses dan dipraktikkan oleh semua kalangan, menggunakan bahan alami dan terjangkau, serta memberikan edukasi tentang pentingnya nutrisi dalam kehidupan sehari-hari.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Our Values</h6>
                            <p>
                                Kami menjunjung tinggi kualitas bahan, transparansi nutrisi, kemudahan dalam memasak, serta komitmen untuk membantu setiap orang hidup lebih sehat tanpa harus merasa terbebani.
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
                            <Card.Img variant="top" src={quinoaImage} className="card-img-fixed" />
                            <Card.Body>
                                <Card.Title>Nasi Goreng Quinoa Merah</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate("/recipes/1")}>
                                    Lihat Resep
                                </Button>

                            </Card.Body>
                        </Card>

                        <Card className="popular" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={buahNaga} className="card-img-fixed" />
                            <Card.Body>
                                <Card.Title>Salad Buah Naga 'Ceria'</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate("/recipes/2")}>
                                    Lihat Resep
                                </Button>

                            </Card.Body>
                        </Card>

                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={pepesIkan} className="card-img-fixed" />
                            <Card.Body>
                                <Card.Title>Pepes Ikan Kembung Kemangi</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate("/recipes/3")}>
                                    Lihat Resep
                                </Button>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Home;