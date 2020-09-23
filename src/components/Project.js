import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

let windowSize = 900;
if (typeof window !== 'undefined') {
    windowSize =  useWindowSize();
}

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {windowWidth: windowSize.innerWidth};
    }
   
    handleResize = (e) => {
        this.setState({ windowWidth: windowSize.innerWidth });
    };
   
    componentDidMount() {
        windowSize.addEventListener("resize", this.handleResize);
    }
   
    componentWillUnmount() {
        windowSize.addEventListener("resize", this.handleResize);
    } 
   
    render() {
        const {windowWidth} = this.state; 
        
        if (windowWidth > 992) { 
            // Display 3 Slides: Screen > Medium Breakpoint 
            return (
                <Carousel id="project">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-image"
                            src={this.props.image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-image"
                            src={this.props.image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-image"
                            src={this.props.image3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            );
        } 
        else { 
            // Display 4 Slides: Screen <= Medium Breakpoint 
            return (
                <Carousel id="project">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-description"
                            src={this.props.image0}
                            alt="Project Description"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-image"
                            src={this.props.image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-image"
                            src={this.props.image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-image"
                            src={this.props.image3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            );
        }
    }
}

export default Project