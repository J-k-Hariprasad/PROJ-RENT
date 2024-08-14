import React, { useEffect, useState } from "react";
import axios from "axios";
import  "./ViewCars.css";
function RemoveCar() {
    const [cars, setCars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await axios.get('http://localhost:9001/cars/getcar');
                setCars(response.data);
            } catch (error) {
                console.error('There was an error getting the car!', error);
            }
        }

        fetchCars();
    }, []);

    const handleRemoveClick = (car) => {
        setSelectedCar(car);
        setShowModal(true);
    };

    const handleConfirmRemove = async () => {
        try {
            await axios.delete(`http://localhost:9001/cars/deletecar/${selectedCar.id}`);
            setCars(cars.filter(car => car.id !== selectedCar.id));
            setShowModal(false);
        } catch (error) {
            console.error('There was an error deleting the car!', error);
        }
    };

    const handleCancelRemove = () => {
        setShowModal(false);
        setSelectedCar(null);
    };

    return (
        <div>
            <div className='ok'>
                <h2 className='head'>Cars</h2>
                <div className='ol2'>
                    {cars.map((car, index) => (
                        <div key={index} className="card12">
                            <h3>{car.carname}</h3>
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
                            <p>Car Colour: {car.colour}</p>
                            <p>Car Type: {car.type}</p>

                            <button onClick={() => handleRemoveClick(car)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to remove this car?</p>
                        <div id="kllk">
                        <button className="confirm-button" onClick={handleConfirmRemove}>Confirm</button>
                        <button className="cancel-button" onClick={handleCancelRemove}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RemoveCar;
