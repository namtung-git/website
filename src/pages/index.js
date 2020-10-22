import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Project from '../components/Project'

/* Profile Pictures */
import squareAva from '../assets/images/avatar-md.png'
import roundAva from '../assets/images/avatar-xs.png'

/* Project Images with width:height ratio of 1.6:1 */

//Project 1
import proj1a from '../assets/images/project1a.png'
import proj1b from '../assets/images/project1b.png'
import proj1c from '../assets/images/project1c.png'

//Project 2
import proj2a from '../assets/images/project2a.png'
import proj2b from '../assets/images/project2b.png'
import proj2c from '../assets/images/project2c.png'

//Project 3
import proj3a from '../assets/images/project3a.png'
import proj3b from '../assets/images/project3b.png'
import proj3c from '../assets/images/project3c.png'


class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                {/* Gatsby React Helmet */}
                <Helmet
                    title="Khe Le"
                    meta={[
                        { name: 'description', content: 'Personal Website' },
                        { name: 'keywords', content: 'personal webstite, portfolio' },
                    ]}>
                </Helmet>

                {/* Banner */}
                <Banner />

                {/* Main Section */}
                <div id="main">

                    {/* About Section */}
                    <section id="about" >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                     <img className="square-avatar" src={squareAva} alt="Avatar" />
                                </div>
                                <div className="about-details col-lg-7">
                                    <h2 className="subtitle">My intro</h2>
                                    <h1 className="title">About me</h1>
                                    <hr></hr>
                                    <img className="round-avatar" src={roundAva} alt="Avatar" />
                                    <p>
                                        I'm a Computer Science major at Connecticut College in New London, CT with
                                        a deep interest in creating responsive websites, applications or anything in between.
                                        I'm dedicated to my work and incredibly passionate in pursuing a career in Software Engineering.
                                    </p>
                                    <div class="profile row">
                                        <div className="profile-column col-md-6">
                                            <h3><b>Full Name:</b> Khe Le</h3>
                                            <h3><b>School:</b> Connecticut College</h3>
                                            <h3><b>Major:</b> Computer Science</h3>
                                            <h3><b>Expected Graduation:</b> 2024</h3>
                                        </div>
                                        <div className="profile-column col-md-6">
                                            <h3><b>Origin:</b> Ho Chi Minh, Vietnam</h3>
                                            <h3><b>DOB:</b> July 4, 2001</h3>
                                            <h3><b>Language:</b> English, Vietnamese</h3>
                                            <h3><b>Email:</b> levanyenkhe@gmail.com</h3>
                                        </div>
                                    </div>
                                    <a href="https://drive.google.com/file/d/1zIoDG4gzAP-i3VM2lO8snhFuuzdVjl4n/view?usp=sharing">
                                        <button type="button" className="cv-button btn">
                                            Download CV
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Work Section */}
                    <section id="work">   
                        <div className="container-fluid">
                            <h1 className="title">Some projects I've built</h1>
                            <h1 className="vertical-line">|</h1>

                            {/* Project 1 */}
                            <div className="row">

                                {/* Description displayed at breakpoint MEDIUM */}
                                <div className="description top">
                                    <h2 className="category">UI/UX Design Project</h2>
                                    <h2 className="name">MyTIN App</h2>
                                    <p className="details top">
                                        A friendly, welcoming look for the HR management web and mobile application at FPT Telecom, Vietnam. 
                                        A video conference service is also integrated into the app, allowing coworkers to connect through face-to-face calls.
                                    </p>
                                    <ul>
                                        <li className="top">Angular</li>
                                        <li className="top">OpenVidu API</li>
                                        <li className="top">Figma</li>
                                    </ul>
                                </div>

                                {/* Carousel is always displayed */}
                                <div className="col-lg-7">
                                    <Project image1={proj1a} image2={proj1b} image3={proj1c}></Project>
                                </div>

                                {/* Description displayed at breakpoint LARGE */}
                                <div className="description right">
                                    <h2 className="category">UI Design Project</h2>
                                    <h2 className="name">MyTIN App</h2>
                                    <p className="details right">
                                        A friendly, welcoming look for the HR management web and mobile application at FPT Telecom, Vietnam. 
                                        A video conference service is also integrated into the app, allowing coworkers to connect through face-to-face calls.
                                    </p>
                                    <ul>
                                        <li className="right">Angular</li>
                                        <li className="right">OpenVidu API</li>
                                        <li className="right">Figma</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="row">

                                {/* Description displayed at breakpoint MEDIUM */}
                                <div className="description top">
                                    <h2 className="category">Research Project</h2>
                                    <h2 className="name">MyoCare</h2>
                                    <p className="details top">
                                        A home-based ECG monitor that detects myocardial infarction in the elderly. 
                                        Once the system suceeds in collecting and analyzing ECG signals, 
                                        diagnostic data is uploaded to a web application for tracking.
                                    </p>
                                    <ul>
                                        <li className="top">Firebase</li>
                                        <li className="top">MATLAB</li>
                                        <li className="top">Python</li>
                                        <li className="top">Kit STM32F4</li>
                                    </ul>
                                </div>

                                {/* Carousel is always displayed */}
                                <div className="col-lg-7 offset-lg-5">
                                    <Project image1={proj2a} image2={proj2b} image3={proj2c}></Project>
                                </div>

                                {/* Description displayed at breakpoint LARGE */}
                                <div className="description left">
                                    <h2 className="category">Research Project</h2>
                                    <h2 className="name">MyoCare</h2>
                                    <p className="details left">
                                        A home-based ECG monitor that detects myocardial infarction in the elderly. 
                                        Once the system suceeds in collecting and analyzing ECG signals, 
                                        diagnostic data is uploaded to a web application for tracking.
                                    </p>
                                    <ul>
                                        <li className="left">Firebase</li>
                                        <li className="left">MATLAB</li>
                                        <li className="left">Python</li>
                                        <li className="left">Kit STM32F4</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="row">

                                {/* Description displayed at breakpoint MEDIUM */}
                                <div className="description top">
                                    <h2 className="category">College Final Project</h2>
                                    <h2 className="name">Coin Collector</h2>
                                    <p className="details top">
                                        A <a href="https://github.com/SylviaLe/Final-Project">
                                            Python game 
                                        </a> with rank system played with keyboard arrow keys. Built with the particular&nbsp;      
                                        <a href="https://mcsp.wartburg.edu/zelle/python/graphics.py#:~:text=The%20library%20is%20designed%20to,Franklin%2C%20Beedle%20%26%20Associates).">
                                            graphics library by John Zelle.
                                        </a> Climb rank by collect all generated coins and avoid traps in the shortest amount of time.
                                    </p>
                                    <ul>
                                        <li className="top">PyGame</li>
                                        <li className="top">Graphics Library</li>
                                    </ul>
                                </div>

                                {/* Carousel is always displayed */}
                                <div className="col-lg-7">
                                    <Project image1={proj3a} image2={proj3b} image3={proj3c}></Project>
                                </div>

                                {/* Description displayed at breakpoint LARGE */}
                                <div className="description right">
                                    <h2 className="category">College Final Project</h2>
                                    <h2 className="name">Coin Collector</h2>
                                    <p className="details right">
                                        A <a href="https://github.com/SylviaLe/Final-Project">
                                            Python game 
                                        </a> with rank system played with keyboard arrow keys. Built with the particular&nbsp; 
                                        <a href="https://mcsp.wartburg.edu/zelle/python/graphics.py#:~:text=The%20library%20is%20designed%20to,Franklin%2C%20Beedle%20%26%20Associates).">
                                            graphics library by John Zelle.
                                        </a> Climb rank by collect all generated coins and avoid traps in the shortest amount of time.
                                    </p>
                                    <ul>
                                        <li className="right">PyGame</li>
                                        <li className="right">Graphics Library</li>
                                    </ul>
                                </div>
                            </div>

                            <h1 className="other-title">Other projects</h1>
                            <h1 className="other-vertical-line">|</h1>

                            <div className="row">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="card">
                                            <img className="card-img-top" src="https://drive.google.com/uc?export=view&id=1oox93HLDZyIZl74k_DiKu_7xtYTdRcLu" alt="Card cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Basic Blog Website</h5>
                                                <p className="card-text">A simple blog website that keeps track of your daily memories. Write anything and post!</p>
                                                <p className="card-tech">
                                                    Node&nbsp;&nbsp;Express&nbsp;&nbsp;EJS
                                                    <span className="card-icon"><a className="icon fa-github gh" href="https://github.com/khe-le/basic-blog"><span className="label">GitHub</span></a></span>
                                                </p>
                                            </div> 
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="card">
                                            <img className="card-img-top" src="https://drive.google.com/uc?export=view&id=1ozfjK5TxAYJSbyRZq1pCh2HCQbofbsqK" alt="Card cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">To Do List</h5>
                                                <p className="card-text">Keep yourself busy and productive everyday with this to-do list built with Node.</p>
                                                <p className="card-tech">
                                                    Node&nbsp;&nbsp;Express&nbsp;&nbsp;EJS
                                                    <span className="card-icon"><a className="icon fa-github gh" href="https://github.com/khe-le/todolist-v1"><span className="label">GitHub</span></a></span>
                                                </p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="card">
                                            <img className="card-img-top" src="https://drive.google.com/uc?export=view&id=1EiwNneyilbBb4b73H2gqKV4b5-A7j2vE" alt="Card cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Simon Game</h5>
                                                <p className="card-text">Test your memory skill with this classic Simon game built from scratch.</p>
                                                <p className="card-tech">
                                                    Javascript&nbsp;&nbsp;jQuery
                                                    <span className="card-icon"><a className="icon fa-github gh" href="https://github.com/khe-le/simon-game"><span className="label">GitHub</span></a></span>
                                                </p>
                                            </div> 
                                    </div>
                                </div>


                            </div>

                        </div>
                    </section>
                </div> 
            </Layout>
        )
    }
}

export default HomeIndex