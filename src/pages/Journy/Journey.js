import React, { useState } from 'react';
import './Journey.css'; // Ensure this file contains your styles
import Jeep from '../assert/1 (1).png';
import thar from '../assert/1 (2).png';
import gur from '../assert/1 (3).png';
import jimm from '../assert/1 (4).png';
import har from '../assert/pn (1).png'
import ha from '../assert/pn (2).png'
import ha1 from '../assert/pn (7).png'
import Navi from '../home/nav/Navi';


const completed = [
    { id: 1, name: "Trip to Paris", rating: 4, img: Jeep },
    { id: 2, name: "Trip to Moonaru", rating: 5,img: gur},
    { id: 3, name: "Trip to Croog", rating: 5,img: jimm},
    { id: 4, name: "Trip to ooty", rating: 5,img: thar},
    { id: 5, name: "Trip to kodaikanal", rating: 5,img: ha},
    { id: 6, name: "Trip to Srirangam", rating: 5,img: har},
];
const ongoingTrips = [
    { id: 1, name: "Trip to Goa", rating: 4, img: ha1 },
    
];

function Journey() {
    const [showModal, setShowModal] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        review: '',
        rating: 0,
    });
    const [showThankYou, setShowThankYou] = useState(false);

    const openModal = (trip) => {
        setSelectedTrip(trip);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            name: '',
            email: '',
            review: '',
            rating: 0,
        });
        setShowThankYou(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
        setShowThankYou(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating });
    };

    return (
        <div>
            <Navi/>
            <div className='oke'>
            <div className='ok1'>
                <h2 className='head1'>Trips Ongoing</h2>
                <div className='ol21'>
                    {ongoingTrips.map((trip) => (
                        <div key={trip.id} className="card1">
                            <h3>{trip.name}</h3>
                            <div className="details1">
                                <img src={trip.img} alt={trip.name} />
                                <button onClick={() => openModal(trip)}>Review</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='ok1'>
                <h2 className='head1'>Trips Completed</h2>
                <div className='ol21'>
                    {completed.map((trip) => (
                        <div key={trip.id} className="card1">
                            <h3>{trip.name}</h3>
                            <div className="details1">
                                <img src={trip.img} alt={trip.name} />
                                <button onClick={() => openModal(trip)}>Review</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
{/* ------------------------------------------------------------------------------------------------- */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {showThankYou ? (
                            <div>
                                <h2>Thank you for your feedback!</h2>
                                <button onClick={closeModal}>Close</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2>Leave a Review for {selectedTrip.name}</h2>
                                <label>
                                    <p>
                                    Name:
                                    </p>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    <p>Email:</p>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    <p>Review:</p>
                                        <textarea
                                            name="review"
                                            value={formData.review}
                                            onChange={handleInputChange}
                                        />
                                </label>
                                <label>
                                    <div>

                                   <p> Rate The Trip</p>
                                    <div className="star-rating">
                                        {Array(5).fill(false).map((_, i) => (
                                            <span
                                            key={i}
                                            className={i < formData.rating ? 'star filled' : 'star'}
                                            onClick={() => handleRatingChange(i + 1)}
                                            >★</span>
                                        ))}
                                    </div>
                                        </div>
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Journey;
