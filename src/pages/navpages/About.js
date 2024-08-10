import Navi from '../home/nav/Navi';
import './About.css';
// import teamPhoto from '../assert/team-photo.jpg'; // Replace with your team photo
// import missionIcon from '../assert/mission-icon.png'; // Replace with your mission icon
// import visionIcon from '../assert/vision-icon.png'; // Replace with your vision icon
// import valuesIcon from '../assert/values-icon.png'; // Replace with your values icon

function About() {
    return (
        <div>
            <Navi/>
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p>Discover who we are and what we stand for.</p>
            </div>
            <div className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    {/* <img src={missionIcon} alt="Mission Icon" /> */}
                    <p>To provide top-notch car rental services that empower our customers to explore the world with freedom and flexibility.</p>
                </div>
                <div className="about-section">
                    <h2>Our Vision</h2>
                    {/* <img src={visionIcon} alt="Vision Icon" /> */}
                    <p>To be the leading car rental company recognized for innovation, customer satisfaction, and operational excellence.</p>
                </div>
                <div className="about-section">
                    <h2>Our Values</h2>
                    {/* <img src={valuesIcon} alt="Values Icon" /> */}
                    <p>Integrity, Customer Focus, Innovation, and Teamwork.</p>
                </div>
            </div>
            <div className="team-section">
                <h2>Meet Our Team</h2>
                {/* <img src={teamPhoto} alt="Team Photo" className="team-photo" /> */}
                <p>We are a group of passionate professionals dedicated to providing you with the best car rental experience.</p>
            </div>
        </div>
        </div>
    );
}

export default About;
