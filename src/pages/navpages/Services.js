import React from 'react';
import './Services.css';
import Navi from '../home/nav/Navi';

const Service = () => {
    const features = [
        { icon: '❄️', title: 'Air Conditioning System', description: 'Stay cool with our air conditioning system.' },
        { icon: '🎵', title: 'Stereo System Facility', description: 'Enjoy your favorite tunes on the go.' },
        { icon: '🔒', title: 'Individual Seat Belt', description: 'Safety first with individual seat belts.' },
        { icon: '🚗', title: 'Anti-Lock Braking System', description: 'Enhanced safety with ABS.' },
        { icon: '🔐', title: 'Child Safety Door Locks', description: 'Keep your kids safe with door locks.' },
        { icon: '🩹', title: 'First Aid Box', description: 'Be prepared with a first aid box.' },
        { icon: '💧', title: 'Water Bottle', description: 'Stay hydrated with a water bottle.' },
        { icon: '🧻', title: 'Tissue Paper', description: 'Convenience with tissue paper.' },
        { icon: '📰', title: 'Newspaper/Magazine', description: 'Stay informed with newspapers and magazines.' }
    ];
    return (
        <div>
            <Navi/>
            <div className='oke'>

            <div className="container">
                <h1>Why Self Drive Car Rental At Rent'N Roll</h1>
                <div className="features">
                    <div className="feature">
                        <div className="icon">🌟</div>
                        <h2>Best Quality of Services</h2>
                        <p>We offer the best quality of self drive car rental services in Coimbatore. Moreover, we offer the inexpensive self drive car rental services in Coimbatore.</p>
                    </div>
                    <div className="feature">
                        <div className="icon">⏰</div>
                        <h2>Timely Service Delivery</h2>
                        <p>We are the best self drive car rentals company in Coimbatore and we follow the perfect timely service delivery.</p>
                    </div>
                    <div className="feature">
                        <div className="icon">📞</div>
                        <h2>24X7 Support</h2>
                        <p>All-day support pre and post booking to help you with everything.</p>
                    </div>
                </div>
            </div>
            {/* ------------------------- */}
            <div className="features-container">
            {/* <h1>Royalpicks Self Drive Car Rentals Features</h1> */}
            <h2 className='headi'>Rent'N Roll Self Drive Car Rentals Features</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
            </div>
    );
};

export default Service;
