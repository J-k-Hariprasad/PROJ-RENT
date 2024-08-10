import React, { useState } from 'react';
import axios from 'axios';
import './CarAdd.css';


function CarAdd() {
    const [carType, setCarType] = useState('');
    const [carName, setCarName] = useState('');
    const [carColour, setCarColour] = useState('');
    const [perDayPrice, setPerDayPrice] = useState('');
    const [carImage, setCarImage] = useState(null);

    const handleImageChange = (e) => {
        setCarImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Type', carType);
        formData.append('carname', carName);
        formData.append('colour', carColour);
        formData.append('perday', perDayPrice);
        formData.append('carimg', carImage);
    
        try {
            const response = await axios.post('http://localhost:9001/cars/addcar', formData);
            console.log(response.data);
            alert('Car Added Successfully');
        } catch (error) {
            console.error('There was an error adding the car!', error);
        }
    };
    

    return (
        <div className='car-add-container'>
          
            <form className='car-add-form' onSubmit={handleSubmit}>
                <h2>Add a New Car</h2>
                <div className='div'>
                <div className='form-group'>
                    <label htmlFor='type'>Car Type</label>
                    <input 
                        type='text' 
                        id='type' 
                        value={carType} 
                        onChange={(e) => setCarType(e.target.value)} 
                        required 
                        />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Car Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        value={carName} 
                        onChange={(e) => setCarName(e.target.value)} 
                        required 
                        />
                </div>
                </div>
                <div className='div'>
                <div className='form-group'>
                    <label htmlFor='colour'>Car Colour</label>
                    <input 
                        type='text' 
                        id='colour' 
                        value={carColour} 
                        onChange={(e) => setCarColour(e.target.value)} 
                        required 
                        />
                </div>
                <div className='form-group'>
                    <label htmlFor='perday'>Per Day Price</label>
                    <input 
                        type='number' 
                        id='perday' 
                        value={perDayPrice} 
                        onChange={(e) => setPerDayPrice(e.target.value)} 
                        required 
                        />
                </div>
                </div>
                    <label htmlFor='carimg'>Car Image</label>
                <div className='form-group1'>
                    <input 
                        type='file' 
                        id='carimg' 
                        accept='image/*' 
                        onChange={handleImageChange} 
                        required 
                    />
                </div>
                <button type='submit' className='car-add-button'>Add Car</button>
            </form>
        </div>
    );
}

export default CarAdd;
