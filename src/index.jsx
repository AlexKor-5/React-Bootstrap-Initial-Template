import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel'
import first_image from './images/1.jpg';
import second_image from './images/2.jpg';
import third_image from './images/3.jpg';


let destination = document.querySelector("#container");

const slider_item = (object) => {
    return (
        <Carousel.Item interval={object.interval} style={{height: "720px"}}>
            <img
                className="d-block w-100"
                src={object.src}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

ReactDOM.render(
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Carousel>
            {
                slider_item({
                    interval: 1000,
                    src: first_image
                })
            }
            {
                slider_item({
                    interval: 1000,
                    src: second_image
                })
            }
            {
                slider_item({
                    interval: 1000,
                    src: third_image
                })
            }
        </Carousel>
    </>,
    destination
);