import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const Project = (props) => (
    <Carousel id="project">
        <Carousel.Item>
            <img
                className="d-block w-100 project-image"
                src={props.image1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 project-image"
                src={props.image2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 project-image"
                src={props.image3}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
)


export default Project