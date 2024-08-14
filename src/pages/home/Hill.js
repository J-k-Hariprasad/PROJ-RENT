import '../home/Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Hill() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await axios.get(`http://localhost:9001/cars/byType/hill`);
                setCars(response.data);
            } catch (error) {
                console.error('There was an error getting the car!', error);
            }
        }

        fetchCars();
    }, []);

    const navigate = useNavigate();

    const handleBook = (perday, id) => {
        navigate('/book', { state: { perday, id } });
    };

    return (
        <div>
            <div className='ok'>
                <h2 className='head'>Hill Climbers</h2>
                <div className='ol2'>
                    {cars.map((car, index) => (
                        <div key={index} className="card12">
                            <h3>{car.carname}</h3>
                            {/* <h1>{car.id}</h1> */}
                            {car.carimg && (
                                <img 
                                    src={`data:image/png;base64,${car.carimg}`} 
                                    alt={car.carname} 
                                    className="car-image" 
                                />
                            )}
                            <div className="details">
                                <p>Price Per Day (24hrs): ₹{car.perday}</p>
                            </div>
                            <button onClick={() => handleBook(car.perday, car.id)} className="book-now">Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hill;
