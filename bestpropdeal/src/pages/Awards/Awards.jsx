import React from 'react';
import './awards.css';
import award1 from '../../Assets/award1.JPG'; // replace with actual paths
import award2 from '../../Assets/award2.JPG'; // replace with actual paths
import award3 from '../../Assets/award3.JPG'; // replace with actual paths
import award4 from '../../Assets/award4.jpg'; // replace with actual paths
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

const Awards = () => {
    return <>
        <Navbar type="fixed" bcolor="#342f30" />
        <div className="gallery-container">
            <h1 className="gallery-heading">BestPropDeal Awards</h1>
            <p className="gallery-description">Recognizing excellence in property dealings with our prestigious awards.</p>
            <div className="gallery-grid">
                <div className="gallery-item"><img src={award1} alt="Award 1" /></div>
                <div className="gallery-item"><img src={award2} alt="Award 2" /></div>
                <div className="gallery-item"><img src={award3} alt="Award 3" /></div>
                <div className="gallery-item"><img src={award4} alt="Award 4" /></div>
            </div>
        </div>
        <Footer />
    </>
}

export default Awards;
