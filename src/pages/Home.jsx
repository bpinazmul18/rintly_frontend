import React from "react";
import { Container } from "react-bootstrap";
import Slider from "../components/slider";

// eslint-disable-next-line
export default function (props) {
    return (
        <>
            {/* Features section */}
            <section className="features-section py-5 mb-4">
                <div className="section-inner">
                    <Container>
                        <Slider/>
                    </Container>
                </div>
            </section>
        </>
    )
}