// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './Edit.css'

// function EditCar() {
//     const [cars, setCars] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedCar, setSelectedCar] = useState(null);
//     const [editedCar, setEditedCar] = useState({});

//     useEffect(() => {
//         async function fetchCars() {
//             try {
//                 const response = await axios.get('http://localhost:9001/cars/getcar');
//                 setCars(response.data);
//             } catch (error) {
//                 console.error('There was an error getting the car!', error);
//             }
//         }

//         fetchCars();
//     }, []);

//     const handleEditClick = (car) => {
//         setSelectedCar(car);
//         setEditedCar(car); // Pre-fill the editing form with the selected car details
//         setShowModal(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedCar({ ...editedCar, [name]: value });
//     };

//     const handleConfirmEdit = async () => {
//         try {
//             await axios.put(`http://localhost:9001/cars/editcar/${selectedCar.id}`, editedCar);
//             setCars(cars.map(car => car.id === selectedCar.id ? editedCar : car));
//             setShowModal(false);
//         } catch (error) {
//             console.error('There was an error editing the car!', error);
//         }
//     };

//     const handleCancelEdit = () => {
//         setShowModal(false);
//         setSelectedCar(null);
//     };

//     return (
//         <div>
//             <div className='ok'>
//                 <h2 className='head'>Cars</h2>
//                 <div className='ol2'>
//                     {cars.map((car, index) => (
//                         <div key={index} className="card12">
//                             <h3>{car.carname}</h3>
//                             {car.carimg && (
//                                 <img 
//                                     src={`data:image/png;base64,${car.carimg}`} 
//                                     alt={car.carname} 
//                                     className="car-image" 
//                                 />
//                             )}
//                             <div className="details">
//                                 <p>Price Per Day (24hrs): ₹{car.perday}</p>
//                             </div>
//                             <p>Car Colour: {car.colour}</p>
//                             <p>Car Type: {car.type}</p>

//                             <button onClick={() => handleEditClick(car)}>Edit</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {showModal && (
//                 <div className="modal1">
//                     <div className="modal-content1">
//                         <div className="car-preview1">
//                             <h3>{editedCar.carname}</h3>
//                             {editedCar.carimg && (
//                                 <img 
//                                     src={`data:image/png;base64,${editedCar.carimg}`} 
//                                     alt={editedCar.carname} 
//                                     className="car-image" 
//                                 />
//                             )}
//                             <div className="details">
//                                 <p>Price Per Day (24hrs): ₹{editedCar.perday}</p>
//                             </div>
//                             <p>Car Colour: {editedCar.colour}</p>
//                             <p>Car Type: {editedCar.type}</p>
//                         </div>
//                         <div className="edit-form1">
//                             <label>
//                                 Car Name:
//                                 <input 
//                                     type="text" 
//                                     name="carname" 
//                                     value={editedCar.carname || ''} 
//                                     onChange={handleChange} 
//                                 />
//                             </label>
//                             <label>
//                                 Car Type:
//                                 <input 
//                                     type="text" 
//                                     name="type" 
//                                     value={editedCar.type || ''} 
//                                     onChange={handleChange} 
//                                 />
//                             </label>
//                             <label>
//                                 Car Colour:
//                                 <input 
//                                     type="text" 
//                                     name="colour" 
//                                     value={editedCar.colour || ''} 
//                                     onChange={handleChange} 
//                                 />
//                             </label>
//                             <label>
//                                 Price Per Day:
//                                 <input 
//                                     type="number" 
//                                     name="perday" 
//                                     value={editedCar.perday || ''} 
//                                     onChange={handleChange} 
//                                 />
//                             </label>
//                             <div className="modal-buttons1">
//                                 <button className="confirm-button" onClick={handleConfirmEdit}>Confirm</button>
//                                 <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default EditCar;
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Edit.css';

function EditCar() {
    const [cars, setCars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [editedCar, setEditedCar] = useState({});
    const [newImage, setNewImage] = useState(null); // State to hold the new image file
    const [imagePreview, setImagePreview] = useState(""); // State to hold the image preview

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

    const handleEditClick = (car) => {
        setSelectedCar(car);
        setEditedCar(car); // Pre-fill the editing form with the selected car details
        setImagePreview(`data:image/png;base64,${car.carimg}`); // Set the initial image preview
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCar({ ...editedCar, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewImage(file);

        // Generate a URL for the image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview("");
        }
    };

    const handleConfirmEdit = async () => {
        const formData = new FormData();
        formData.append('carname', editedCar.carname);
        formData.append('type', editedCar.type);
        formData.append('colour', editedCar.colour);
        formData.append('perday', editedCar.perday);
        if (newImage) {
            formData.append('carimg', newImage); // Add the new image file to the form data
        }

        try {
            await axios.put(`http://localhost:9001/cars/editcar/${selectedCar.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setCars(cars.map(car => car.id === selectedCar.id ? { ...editedCar, carimg: newImage ? imagePreview.split(',')[1] : car.carimg } : car));
            setShowModal(false);
        } catch (error) {
            console.error('There was an error editing the car!', error);
        }
    };

    const handleCancelEdit = () => {
        setShowModal(false);
        setSelectedCar(null);
        setNewImage(null);
        setImagePreview("");
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

                            <button onClick={() => handleEditClick(car)}>Edit</button>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="modal1">
                    <div className="modal-content1">
                        <div className="car-preview1">
                            <h3>{editedCar.carname}</h3>
                            {imagePreview && (
                                <img 
                                    src={imagePreview} 
                                    alt={editedCar.carname} 
                                    className="car-image" 
                                />
                            )}
                            <div className="details">
                                <p>Price Per Day (24hrs): ₹{editedCar.perday}</p>
                            </div>
                            <p>Car Colour: {editedCar.colour}</p>
                            <p>Car Type: {editedCar.type}</p>
                        </div>
                        <div className="edit-form1">
                            <label>
                                Car Name:
                                <input 
                                    type="text" 
                                    name="carname" 
                                    value={editedCar.carname || ''} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label>
                                Car Type:
                                <input 
                                    type="text" 
                                    name="type" 
                                    value={editedCar.type || ''} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label>
                                Car Colour:
                                <input 
                                    type="text" 
                                    name="colour" 
                                    value={editedCar.colour || ''} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label>
                                Price Per Day:
                                <input 
                                    type="number" 
                                    name="perday" 
                                    value={editedCar.perday || ''} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label>
                                Car Image:
                                <input 
                                    type="file" 
                                    name="carimg" 
                                    accept="image/*"
                                    onChange={handleImageChange} 
                                />
                            </label>
                            <div className="modal-buttons1">
                                <button className="confirm-button" onClick={handleConfirmEdit}>Confirm</button>
                                <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditCar;
