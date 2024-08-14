
// import '../booking/Book.css';
// import log from '../assert/rent nroll logo.png';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import axios from 'axios';
// import suc from '../assert/login/loading.gif';
// import er from '../assert/login/error.gif';

// function Book() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const carPerDayPrice = location.state?.perday || 0;
//     const car_id = location.state?.id || 0;

//     const [pickDate, setPickDate] = useState('');
//     const [dropDate, setDropDate] = useState('');
//     const [username, setUsername] = useState('');
//     const [user_id, setUserid] = useState('');
//     const [email, setEmail] = useState('');
//     const [city, setCity] = useState('');
//     const [occasion, setOccasion] = useState('');
//     const [address, setAddress] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [numDays, setNumDays] = useState(0);
//     const [totalPrice, setTotalPrice] = useState(0);

//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');
//     const [modalImg, setModalImg] = useState('');

//     useEffect(() => {
//         // Retrieve user data from localStorage when the component mounts
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (storedUser) {
//             setUsername(storedUser.name || '');
//             setUserid(storedUser.id || '');
//             setEmail(storedUser.email || '');
//         }

//         if (pickDate && dropDate) {
//             const pick = new Date(pickDate);
//             const drop = new Date(dropDate);
//             const days = Math.ceil((drop - pick) / (1000 * 60 * 60 * 24)); 
            
//             if (days > 0) {
//                 let price = days * carPerDayPrice;
//                 if (occasion === 'Yes') {
//                     price *= 0.85;  // Apply 15% discount for special occasions
//                 }

//                 setNumDays(days);
//                 setTotalPrice(price);
//             } else {
//                 setNumDays(0);
//                 setTotalPrice(0);
//             }
//         }
//     }, [pickDate, dropDate, occasion, carPerDayPrice]);

//     const bookingDetails = {
//         pickDate,
//         dropDate,
//         username,
//         email,
//         city,
//         occasion,
//         address,
//         phoneNumber,
//         numDays,
//         totalPrice,
//         car_id,
//         user_id
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:9001/bookings/bookingUser', bookingDetails);
//             setModalMessage(`Booking successful!`);
//             setModalImg(suc);
//             setModalIsOpen(true);
//             setTimeout(() => {
//                 navigate('/pay', { state: { bookingDetails } });  // Navigate to payment page with booking details
//             }, 2000);
//         } catch (error) {
//             console.error('Error during booking:', error);
//             setModalMessage("Error: Unable to complete the booking.");
//             setModalImg(er);
//             setModalIsOpen(true);
//         }
//     };

//     const closeModal = () => {
//         setModalIsOpen(false);
//     };

//     return (
//         <div className='kq'>
//             <div className='op'>
//                 <div className='im'>
//                     <img src={log} alt='Rent N Roll Logo'/>
//                 </div>
//                 <div className='opp'>
//                     <div className="signu">
//                         <form onSubmit={handleSubmit}>
//                             <div className='hf'>Booking</div>
//                             <div className='date'>
//                                 <div className='fo'>
//                                     Pickup Date
//                                     <input 
//                                         type='date' 
//                                         id='pickdate' 
//                                         className='da2' 
//                                         value={pickDate}
//                                         onChange={(e) => setPickDate(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className='fo'>
//                                     Drop Date
//                                     <input 
//                                         type='date' 
//                                         id='dropdate' 
//                                         className='da2' 
//                                         value={dropDate}
//                                         onChange={(e) => setDropDate(e.target.value)}
//                                     />
//                                 </div>
//                             </div>
//                             <input 
//                                 className='nput' 
//                                 type="text" 
//                                 placeholder="Username" 
//                                 required 
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
                        
//                             <div className='sig'>
//                                 <select 
//                                     className="nput1"
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                 >
//                                     <option>Select City</option>
//                                     <option>Coimbatore</option>
//                                     <option>Chennai</option>
//                                     <option>Trichy</option>
//                                     <option>Thanjavur</option>
//                                     <option>Thiruvarur</option>
//                                 </select>
//                                 <select 
//                                     className="nput11"
//                                     value={occasion}
//                                     onChange={(e) => setOccasion(e.target.value)}
//                                 >
//                                     <option>Special Occasion?</option>
//                                     <option>Yes</option>
//                                     <option>No</option>
//                                 </select>
//                             </div>
//                             <input 
//                                 className='nput' 
//                                 type="text" 
//                                 placeholder="Address" 
//                                 required 
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                             />
//                             <input 
//                                 className='nput' 
//                                 type="text" 
//                                 placeholder="+91 Phone Number" 
//                                 required 
//                                 value={phoneNumber}
//                                 onChange={(e) => setPhoneNumber(e.target.value)}
//                             />

//                             <div className='price-details'>
//                                 <p>Total Days: {numDays}</p>
//                                 <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
//                             </div>

//                             <button className='utton' type='submit'>Book My Car</button>
//                         </form>
//                     </div>
//                 </div>
//                 <Modal
//                     isOpen={modalIsOpen}
//                     onRequestClose={closeModal}
//                     contentLabel="Booking Modal"
//                     className="Modal"
//                     overlayClassName="Overlay"
//                 >
//                     <div className="modal-conten">
//                         <h2>{modalMessage}</h2>
//                         <img src={modalImg} alt="Modal Icon" />
//                         <button onClick={closeModal}>Close</button>
//                     </div>
//                 </Modal>
//             </div>
//         </div>
//     );
// }

// export default Book;
import '../booking/Book.css';
import log from '../assert/rent nroll logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import suc from '../assert/login/loading.gif';
import er from '../assert/login/error.gif';

function Book() {
    const navigate = useNavigate();
    const location = useLocation();
    const carPerDayPrice = location.state?.perday || 0;
    const car_id = location.state?.id || 0;

    const [pickDate, setPickDate] = useState('');
    const [dropDate, setDropDate] = useState('');
    const [username, setUsername] = useState('');
    const [user_id, setUserid] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [occasion, setOccasion] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numDays, setNumDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalImg, setModalImg] = useState('');

    useEffect(() => {
        // Retrieve user data from localStorage when the component mounts
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUsername(storedUser.name || '');
            setUserid(storedUser.id || '');
            setEmail(storedUser.email || '');
        }

        if (pickDate && dropDate) {
            const pick = new Date(pickDate);
            const drop = new Date(dropDate);
            const days = Math.ceil((drop - pick) / (1000 * 60 * 60 * 24)); 
            
            if (days > 0) {
                let price = days * carPerDayPrice;
                if (occasion === 'Yes') {
                    price *= 0.85;  // Apply 15% discount for special occasions
                }

                setNumDays(days);
                setTotalPrice(price);
            } else {
                setNumDays(0);
                setTotalPrice(0);
            }
        }
    }, [pickDate, dropDate, occasion, carPerDayPrice]);

    const bookingDetails = {
        pickDate,
        dropDate,
        username,
        email,
        city,
        occasion,
        address,
        phoneNumber,
        numDays,
        totalPrice,
        car_id,
        user_id
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9001/bookings/bookingUser', bookingDetails);
            setModalMessage(`Booking successful!`);
            setModalImg(suc);
            setModalIsOpen(true);
            console.log(bookingDetails);
            setTimeout(() => {
                navigate('/pay', { state: { bookingDetails } });  // Navigate to payment page with booking details
            }, 2000);
        } catch (error) {
            console.error('Error during booking:', error);
            setModalMessage("Error: Unable to complete the booking.");
            setModalImg(er);
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='kq'>
            <div className='op'>
                <div className='im'>
                    <img src={log} alt='Rent N Roll Logo'/>
                </div>
                <div className='opp'>
                    <div className="signu">
                        <form onSubmit={handleSubmit}>
                            <div className='hf'>Booking</div>
                            <div className='date'>
                                <div className='fo'>
                                    Pickup Date
                                    <input 
                                        type='date' 
                                        id='pickdate' 
                                        className='da2' 
                                        value={pickDate}
                                        onChange={(e) => setPickDate(e.target.value)}
                                    />
                                </div>
                                <div className='fo'>
                                    Drop Date
                                    <input 
                                        type='date' 
                                        id='dropdate' 
                                        className='da2' 
                                        value={dropDate}
                                        onChange={(e) => setDropDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <input 
                                className='nput' 
                                type="text" 
                                placeholder="Username" 
                                required 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        
                            <div className='sig'>
                                <select 
                                    className="nput1"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option>Select City</option>
                                    <option>Coimbatore</option>
                                    <option>Chennai</option>
                                    <option>Trichy</option>
                                    <option>Thanjavur</option>
                                    <option>Thiruvarur</option>
                                </select>
                                <select 
                                    className="nput11"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                >
                                    <option>Special Occasion?</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <input 
                                className='nput' 
                                type="text" 
                                placeholder="Address" 
                                required 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <input 
                                className='nput' 
                                type="text" 
                                placeholder="+91 Phone Number" 
                                required 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />

                            <div className='price-details'>
                                <p>Total Days: {numDays}</p>
                                <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
                            </div>

                            <button className='utton' type='submit'>Book My Car</button>
                        </form>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Booking Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <div className="modal-conten">
                        <h2>{modalMessage}</h2>
                        <img src={modalImg} alt="Modal Icon" />
                        <button onClick={closeModal}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Book;
