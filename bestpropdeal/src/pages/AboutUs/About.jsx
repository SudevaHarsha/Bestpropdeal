import React from 'react'
import "./About.css"
import heroImage from "../../Assets/aboutUs video.mp4"
import missionImage from "../../Assets/ourMission.svg";
import visionImage from "../../Assets/ourMission.svg";
import memberImage1 from "../../Assets/member-1.svg"
import teamImage1 from "../../Assets/team1.svg";
import teamImage2 from "../../Assets/team2.svg";
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

const About = () => {


    const members = [
        {
            name: 'Aditya Jhaveri',
            title: 'Founder And CEO',
            image: memberImage1,
        },
        {
            name: 'Shivani Karia',
            title: 'Co-Founder And CMO',
            image: memberImage1,
        },
        {
            name: 'Rahul Grover',
            title: 'CEO Office',
            image: memberImage1,
        },
    ];

    return <>
        <Navbar type="fixed" bcolor="#342f30" />
        <section className="hero">
            <div className="hero-text">
                <h1>India’s first <br></br> end-to-end digital <br></br> home-buying <br></br> platform</h1>
            </div>
            <video className='hero-image' autoPlay muted loop>
                <source src={heroImage} type='video/mp4'></source>
            </video>
        </section>
        <section className="mission">
            <div className="mission-image-container">
                <div className="misssion_image_first">
                    <img src={missionImage} alt="Bridge" className="mission-image" />
                    <div className='mission_text_first'>
                        <div>Transform</div>
                        <div>the process of buying</div>
                        <div>Indian Real Estate</div>
                    </div>
                </div>
                <div className="mission_image_second">
                    <p>We provide a better service, whilst charging lower than average fees.</p>
                    <p>We are developing an end-to-end digital platform that will completely change the experience of the homebuyer.</p>
                    <p>Using data science and proprietary algorithms, we will also allow clients to compare properties fairly.</p>
                </div>
            </div>
            <div className="mission-text">
                <h2>Our</h2>
                <h2>Mission</h2>
            </div>
        </section>
        <section className="vission">
            <div className="mission-text">
                <h2>Our</h2>
                <h2>Vission</h2>
            </div>
            <div className="mission-image-container">
                <div className="vission_image_second">
                    <p>We provide a better service, whilst charging lower than average fees.</p>
                    <p>We are developing an end-to-end digital platform that will completely change the experience of the homebuyer.</p>
                    <p>Using data science and proprietary algorithms, we will also allow clients to compare properties fairly.</p>
                </div>
                <div className="misssion_image_first">
                    <img src={missionImage} alt="Bridge" className="mission-image" />
                    <div className='mission_text_first'>
                        <div>Transform</div>
                        <div>the process of buying</div>
                        <div>Indian Real Estate</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="teamMembers">
            {members.map((member, index) => (
                <div key={index} className="member">
                    <div className='member_card'>
                        <div className="member_image_container">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="member_text">
                            <div className='member_name'>{member.name}</div>
                            <div>{member.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        <section className="teamSection">
            <div className="team_showcase">
                <div className="team_heading">
                    <h2 className="team_heading_text">Our Work, Our Play</h2>
                    <h2 className="team_heading_text">A Peek into our Office Culture</h2>
                </div>
                <div>
                    <img src={teamImage1} alt="Team" />
                </div>
                <div className="teamImage_grid1">
                    <img src={teamImage2} alt="Team" />
                    <img src={teamImage1} alt="Team" />
                </div>
                <div className="teamImage_grid2">
                    <header className="header">
                        <h1>Join Our Team</h1>
                        <p>Are you passionate about making a difference?</p>
                        <p>Do you thrive in a fast-paced, collaborative environment?</p>
                        <button>Check Openings</button>
                    </header>
                    <img src={teamImage2} alt="Team" />
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default About