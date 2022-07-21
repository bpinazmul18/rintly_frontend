import {Container, Row, Col} from "react-bootstrap";

const SliderItem = ({ name, media}) => {
    return (
        <div className="slider-item">
            <Container>
                <Row>
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <div className="content px-0 px-md-5 text-center text-md-start">
                            <h1 className="text-light">{name} movies</h1>
                            <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut ex exercitationem hic illo nemo, quis sapiente tenetur?</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="media">
                            <img className="img-fluid rounded-2" src={media} alt={name}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
 
export default SliderItem;