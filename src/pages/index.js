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
                        { name: 'keywords', content: 'personal, webstite, portfolio' },
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
                                        I'm a Computer Science major at Connecticut College in New London, CT.
                                        I have a deep interest in creating interactive websites, applications and enjoy building products that provide pixel-perfect, performant experience.
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
                                    <a href="https://drive.google.com/file/d/18akb1_Lpos0jD-FKMlojet2HkNwglJN-/view?usp=sharing">
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
                            <h1 className="title">Some projects I've built</h1><h1 className="vertical-line">|</h1>

                            {/* Project 1 */}
                            <div className="row">
                                <div className="col-lg-7">
                                    <Project image1={proj1a} image2={proj1b} image3={proj1c}></Project>
                                </div>
                                <div className="description right">
                                    <h2 className="category">UI Design Project</h2>
                                    <h2 className="name">MyTIN App</h2>
                                    <p className="details right">
                                        A friendly, welcoming look for the HR management web and mobile application at FPT Telecom, Vietnam. 
                                        Coworkers can also connect through face-to-face video calls with a video conference service built into the app.
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
                                <div className="col-lg-7 offset-lg-5">
                                    <Project image1={proj2a} image2={proj2b} image3={proj2c}></Project>
                                </div>
                                <div className="description left">
                                    <h2 className="category">Research Project</h2>
                                    <h2 className="name">MyoCare 12</h2>
                                    <p className="details left">
                                        A home-based ECG monitor that detects myocardial infarction in the elderly. 
                                        Once the system suceeds in collecting and analyzing ECG signals, 
                                        diagnostic data is uploaded to a web application that allows doctor-patient interaction.
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
                                <div className="col-lg-7">
                                    <Project image1={proj3a} image2={proj3b} image3={proj3c}></Project>
                                </div>
                                <div className="description right">
                                    <h2 className="category">Team Project</h2>
                                    <h2 className="name">Coin Collector</h2>
                                    <p className="details right">
                                        A Python platform game
                                    </p>
                                    <ul>
                                        <li className="right">PyGame</li>
                                        <li className="right">graphics.py</li>
                                    </ul>
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