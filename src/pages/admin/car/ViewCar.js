import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewCar() {
    const [cars, setCars] = useState([]);

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

    return (
        <div>
            <div>
                <div className='ok'>
                    <h2 className='head'>Car's</h2>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

 export default ViewCar;