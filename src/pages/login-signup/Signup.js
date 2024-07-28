// import { useState } from 'react';
// import '../login-signup/login-sign.css'
// import Popup from './Popup';
// function Signup()
// {
//     const[opp,popp]=useState(false);

//     const cheaksubmit=()=>{

//         const mail = document.getElementById('mail');
//         console.log(mail);
//     }
//     return(
//         <div className='kl'>
//             <div className='op1'>
//                 <div class="signup">
//                     <form>
//                         <label for="chk" aria-hidden="true">Sign Up</label>
//                         <input type="text"  placeholder="Username" id="name"required/>
//                         <input type="text" placeholder="+91 Mobile Number" id="phno" required/>
//                         <input type="mail"  placeholder="Email" id="mail" required/>
//                         <input type="text"placeholder="Lisense Id " id="mail" required/>
//                         <input type="text"  placeholder="Address" id="address" required/>
//                         <input type="password"  placeholder="Enter New Password" id="pass" required/>
//                         <input type="password"  placeholder="Re-Enter Password" id="pass-con" required/>

//                         <button onClick={()=>{popp(true);}}>Create Account</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Signup;


import React, { useState } from 'react';
import './login-sign.css'; // Make sure the CSS file path is correct
import tik from '../assert/tick-1024.webp'; // Make sure the image path is correct
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [popupVisible, setPopupVisible] = useState(false);
    const navi=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setPopupVisible(true);
    };

    const handleBackToLogin = () => {
        setPopupVisible(false);
        navi('/')
    };

    return (
        <div className='kl'>
            <div className='op1'>
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Sign Up</label>
                        <input type="text" placeholder="Username" id="name" required />
                        <input type="text" placeholder="+91 Mobile Number" id="phno" required />
                        <input type="email" placeholder="Email" id="mail" required />
                        <input type="text" placeholder="License Id" id="license" required />
                        <input type="text" placeholder="Address" id="address" required />
                        <input type="password" placeholder="Enter New Password" id="pass" required />
                        <input type="password" placeholder="Re-Enter Password" id="pass-con" required />
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </div>

            {popupVisible && (
                <div className='pop'>
                    <img src={tik} alt='loading' />
                    <h4>Account Created Successfully</h4>
                    <button onClick={handleBackToLogin}>Go</button>
                </div>
            )}
        </div>
    );
}

export default Signup;
