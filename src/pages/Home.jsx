import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../components/slider";

import logo from '../assets/img/play-logo.png'
import icon1 from '../assets/img/video.png'
import icon2 from '../assets/img/high-definition.png'
import icon3 from '../assets/img/financial-profit.png'
import icon4 from '../assets/img/giftbox.png'

// eslint-disable-next-line
export default function (props) {
    return (
        <>
            {/* Features section */}
            <section className="features-section overflow-hidden bg-dark py-5">
                <div className="section-inner">
                    <Container>
                        <Slider/>
                    </Container>
                </div>
            </section>
            {/*Services*/}
            <section className="service-section bg-dark-400 py-5">
                <div className="section-inner">
                    <div className="text-center mb-5">
                        <h2 className="display-2 text-light">Services</h2>
                    </div>
                    <Container>
                        <Row>
                            <Col md="6" lg="3" className="my-3">
                                <div className="card bg-dark p-4 text-center">
                                    <div className="icon-wrap">
                                        <img className="w-25" src={icon1} alt="Add new movie"/>
                                    </div>

                                    <div className="card-body">
                                        <h4 className="h3 text-light">Add new Movie</h4>
                                        <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores nesciunt quia ratione.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" lg="3" className="my-3">
                                <div className="card bg-dark p-4 text-center">
                                    <div className="icon-wrap">
                                        <img className="w-25" src={icon2} alt="Rent movie"/>
                                    </div>

                                    <div className="card-body">
                                        <h4 className="h3 text-light">Rent Movie</h4>
                                        <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores nesciunt quia ratione</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" lg="3" className="my-3">
                                <div className="card bg-dark p-4 text-center">
                                    <div className="icon-wrap">
                                        <img className="w-25" src={icon3} alt="Profit"/>
                                    </div>

                                    <div className="card-body">
                                        <h4 className="h3 text-light">Profit</h4>
                                        <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores nesciunt quia ratione</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" lg="3" className="my-3">
                                <div className="card bg-dark p-4 text-center">
                                    <div className="icon-wrap">
                                        <img className="w-25" src={icon4} alt="Bonus"/>
                                    </div>

                                    <div className="card-body">
                                        <h4 className="h3 text-light">Bonus</h4>
                                        <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores nesciunt quia ratione</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/*Footer*/}
            <footer>
                <div className="section-inner bg-dark py-5">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="content">
                                    <div className="logo-wrap d-flex align-items-center justify-content-center justify-content-md-start my-3">
                                        <img className="w-10" src={logo} alt="Main logo"/>
                                        <span className="display-2 text-light ms-3">Rintly</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="d-flex align-items-center justify-content-center justify-content-md-start my-3">
                                <p className="lead text-light mb-0 ">&copy;{new Date().getFullYear()} all right reserved | Rintly</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}