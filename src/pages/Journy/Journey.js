
// import React, { useState, useEffect } from 'react';
// import './Journey.css'; // Ensure this file contains your styles
// import Jeep from '../assert/1 (1).png';
// import thar from '../assert/1 (2).png';
// import gur from '../assert/1 (3).png';
// import jimm from '../assert/1 (4).png';
// import har from '../assert/pn (1).png';
// import ha from '../assert/pn (2).png';
// import ha1 from '../assert/pn (7).png';
// import Navi from '../home/nav/Navi';
// import axios from 'axios';


// function Journey() {
//     const [user_id, setUserid] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [selectedTrip, setSelectedTrip] = useState(null);
//     const [tripp,setbooking]=useState("");
//     const [formData, setFormData] = useState({
//         username: '',
//         usermail: '',
//         userReview: '',
//         starrating: 0,
//     });
//     const [showThankYou, setShowThankYou] = useState(false);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (storedUser) {
//             setUserid(storedUser.id || '');
//         }
//         async function fetchCars() {
//             try {
//                 const response = await axios.get(`http://localhost:9001/byUserId/${user_id}`);
//                 setbooking(response.data);
//             } catch (error) {
//                 console.error('There was an error getting the car!', error);
//             }
//         }

//         fetchCars();
//     }, []);

//     const openModal = (tripp) => {
//         setSelectedTrip(tripp);
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//         setFormData({
//             starrating: 0,
//             userReview: '',
//             usermail: '',
//             username: '',
//         });
//         setShowThankYou(false);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:9001/review/postreview", formData);
//         } catch (error) {
//             console.error("Error while uploading the review");
//         }
//         setShowThankYou(true);
//         setTimeout(() => {
//             setShowModal(false);
//         }, 3000);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleRatingChange = (rating) => {
//         setFormData({ ...formData, starrating: rating });
//     };

//     return (
//         <div>
//             <Navi />
//             <div className='oke'>
//                 {/* <div className='ok1'>
//                     <h2 className='head1'>Trips Ongoing</h2>
//                     <div className='ol21'>
//                         {ongoingTrips.map((trip) => (
//                             <div key={trip.id} className="card1">
//                                 <h3>{trip.name}</h3>
//                                 <div className="details1">
//                                     <img src={trip.img} alt={trip.name} />
//                                     <button onClick={() => openModal(trip)}>Review</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>*/}
//                 <div className='ok1'> 
//                     <h2 className='head1'>Trips Completed</h2>
//                     <div className='ol21'>
//                         {completed.map((tripp) => (
//                             <div key={tripp.id} className="card1">
//                                 <h3>{tripp.pickDate}</h3>
//                                 <h3>{tripp.dropDate}</h3>
//                                 <div className="details1">
//                                     <img src={tripp.img} alt={tripp.name} />
//                                     <button onClick={() => openModal(tripp)}>Review</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/* ------------------------------------------------------------------------------------------------- */}
//             {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         {showThankYou ? (
//                             <div>
//                                 <h2>Thank you for your feedback!</h2>
//                                 <div className='pattu'>
//                                 <button onClick={closeModal}>Close</button>
//                                     </div>
//                             </div>
//                         ) : (
//                             <form onSubmit={handleSubmit}>
//                                 <h2>Leave a Review for {selectedTrip.name}</h2>
//                                 <label>
//                                     <p>Name:</p>
//                                     <input
//                                         type="text"
//                                         name="username"
//                                         value={formData.username}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     <p>Email:</p>
//                                     <input
//                                         type="email"
//                                         name="usermail"
//                                         value={formData.usermail}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     <p>Review:</p>
//                                     <textarea
//                                         name="userReview"
//                                         value={formData.userReview}
//                                         onChange={handleInputChange}
//                                     />
//                                 </label>
//                                 <label>
//                                     <div>
//                                         <p>Rate The Trip</p>
//                                         <div className="star-rating">
//                                             {Array(5).fill(false).map((_, i) => (
//                                                 <span
//                                                     key={i}
//                                                     className={i < formData.starrating ? 'star filled' : 'star'}
//                                                     onClick={() => handleRatingChange(i + 1)}
//                                                 >★</span>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </label>
//                                 <div className='pattu'>

//                                 <button type="submit">Submit</button>
//                                 </div>
//                             </form>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Journey;
import React, { useState, useEffect } from 'react';
import './Journey.css';
import Navi from '../home/nav/Navi';
import axios from 'axios';

function Journey() {
    const [user_id, setUserid] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [trips, setTrips] = useState([]);
    const [formData, setFormData] = useState({
        username: '',
        usermail: '',
        userReview: '',
        starrating: 0,
    });
    const [showThankYou, setShowThankYou] = useState(false);

    useEffect(() => {
        const fetchUserAndTrips = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                setUserid(storedUser.id || '');
                try {
                    const response = await axios.get(`http://localhost:9001/bookings/byUserId/${storedUser.id}`);
                    setTrips(response.data);
                } catch (error) {
                    console.error('There was an error getting the trips!', error);
                }
            }
        };
    
        fetchUserAndTrips();
    }, []);
    

    const openModal = (trip) => {
        setSelectedTrip(trip);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            starrating: 0,
            userReview: '',
            usermail: '',
            username: '',
        });
        setShowThankYou(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:9001/review/postreview", formData);
            setShowThankYou(true);
            setTimeout(() => {
                closeModal();
            }, 3000);
        } catch (error) {
            console.error("Error while uploading the review", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, starrating: rating });
    };

    return (
        <div>
            <Navi />
            <div className='oke'>
                <div className='ok1'> 
                    <h2 className='head1'>Trips Completed</h2>
                    <div className='ol21'>
                        {trips.map((trip) => (
                            <div key={trip.id} className="card1">
                                <div className='ioio'>
                                <img src={trip.img} alt={trip.name} />
                                <div className='ioi'>
                                <h5>Days : {trip.numDays}</h5>
                                <h5>Amount : ₹{trip.totalPrice}</h5>
                                </div></div>
                                <h5>Pickup Date : {trip.pickDate}</h5>
                                <h5>Drop Date : {trip.dropDate}</h5>
                                <div className="details1">
                                    <button onClick={() => openModal(trip)}>Review</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {showThankYou ? (
                            <div>
                                <h2>Thank you for your feedback!</h2>
                                <div className='pattu'>
                                    <button onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2>Leave a Review for {selectedTrip.name}</h2>
                                <label>
                                    <p>Name:</p>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    <p>Email:</p>
                                    <input
                                        type="email"
                                        name="usermail"
                                        value={formData.usermail}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    <p>Review:</p>
                                    <textarea
                                        name="userReview"
                                        value={formData.userReview}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    <div>
                                        <p>Rate The Trip</p>
                                        <div className="star-rating">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span
                                                    key={i}
                                                    className={i < formData.starrating ? 'star filled' : 'star'}
                                                    onClick={() => handleRatingChange(i + 1)}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </label>
                                <div className='pattu'>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Journey;

