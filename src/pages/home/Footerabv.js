import React from 'react';
import './Footer.css';

import sam from '../assert/New folder/Simple-Booking.png'
import tak from '../assert/New folder/Car-booking-coimbatore.png'
import sa from '../assert/New folder/offers-in-self-drive-car.png'
import sm from '../assert/New folder/self-drive-car-without-driver.png'

const Footerabv = () => {
  return (
    <div className="container">
    <div className='oopp'>STEPS TO RENT SELF DRIVE CARS IN RENT'N ROLL</div>
    <div className='opop'>

      <div className="steps">
        <div className="step">
          <img src={sam} alt="Car" />
          <h2>STEP 1</h2>
          <p>Trip starts!! Book your self drive cars!!</p>
        </div>
        <div className="step">
          <img src={tak} alt="Delivery" />
          <h2>STEP 2</h2>
          <p>Take your Booked Car at Our Office</p>
        </div>
        <div className="step">
          <img src={sm} alt="Ride" />
          <h2>STEP 3</h2>
          <p>You can enjoy yourself ride.</p>
        </div>
        <div className="step">
          <img src={sa} alt="Payment" />
          <h2>STEP 4</h2>
          <p>Trip starts!! Book your self drive cars!!</p>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Footerabv;