// import '../login-signup/login-sign.css';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import React, { useContext } from 'react';
// import Modal from 'react-modal';
// import log from '../assert/rent nroll logo.png'
// import suc from '../assert/login/loading.gif';
// import er from '../assert/login/error.gif';
// import axios from 'axios';
// import { UserContext } from '../context/UserContext';

// Modal.setAppElement('#root');

// function Login() {

//     const { seetUserEmail } = useContext(UserContext); 

//     const navigate = useNavigate();
//     const [userMail, setUserMail] = useState('');
//     const [password, setPassword] = useState('');
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');
//     const [modalImg, setModalImg] = useState('');
//     const [message, setMessage] = useState('');

//     const logindata={email:userMail,pass:password};

//     const handleLogin = async(e) => {
//         e.preventDefault();
//         console.log(logindata);
//         if (userMail.endsWith('admin.in') && password===("admin@1q2w")) {
//             setModalMessage('Welcome, Admin!');
//             setModalImg(suc);
//             setTimeout(() => {
//                 navigate('/admindash');
//             }, 2000);
//         } else {
//             try{
//                 const response = await axios.post('http://localhost:9001/rental/login',logindata);
//                 setModalMessage('Login successful!');
//                 const user = response.data;
//                 setMessage(`User ${user.name} Login successfully!`);
//                 setModalImg(suc);
//                 console.log(logindata);
//                 // seetUserEmail(userMail);
//                 setTimeout(() => {
//                     navigate('/home');
//                 }, 2000);
//             }
//             catch(error)
//             {
//                 console.log(logindata);
//                 setModalImg(er);
//                 setModalMessage("User Does not exist or Invalid Credential's");
//                 console.error("User Does not exist or Invalid Credential's");
//             }
//         }
//         setModalIsOpen(true);
//     };

//     const closeModal = () => {
//         setModalIsOpen(false);
//     };

//     return (
//         <div className='oppp'>
//         <div className='kl1'>
// <div className='im1'>
//     <img src={log} alt='loading'/>
// </div>
//         <div>
//             <div className='op11'>
//                 <div className="signup">
//                     <form onSubmit={handleLogin}>
//                         <h2 className='hw'>Rent'N Roll</h2>
//                         <label htmlFor="chk" aria-hidden="true">Login</label>
//                         <input
//                             type="text"
//                             placeholder="User Email"
//                             id='u-name'
//                             required
//                             value={userMail}
//                             onChange={(e) => setUserMail(e.target.value)}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             id='pass'
//                             required
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <button type="submit">➔</button>
//                         <p className='pt'>Don't you have an account?</p>
//                         <p className='pt1' onClick={() => navigate('/signup')}>Create a New Account</p>
//                     </form>
//                 </div>
//             </div>
//         </div>

//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="Login Modal"
//                 className="Modal"
//                 overlayClassName="Overlay"
//             >
//                 <div className="modal-content">
//                     <h2>{modalMessage}</h2>
//                     <img src={modalImg} alt='loading'/>
//                     <button onClick={closeModal}>Close</button>
//                 </div>
//             </Modal>
//         </div>
//         </div>
//     );
// }
// export default Login;

import '../login-signup/login-sign.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import React from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import log from '../assert/rent nroll logo.png';
import suc from '../assert/login/loading.gif';
import er from '../assert/login/error.gif';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

Modal.setAppElement('#root');

function Login() {
    const { seetUserEmail } = useContext(UserContext); 

    const navigate = useNavigate();
    const [userMail, setUserMail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalImg, setModalImg] = useState('');
    const [message, setMessage] = useState('');

    const logindata = { email: userMail, pass: password };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(logindata);
        if (userMail.endsWith('admin.in') && password === "admin@1q2w") {
            setModalMessage('Welcome, Admin!');
            setModalImg(suc);
            setTimeout(() => {
                navigate('/admindash');
            }, 2000);
        } else {
            try {
                const response = await axios.post('http://localhost:9001/rental/login', logindata);
                setModalMessage('Login successful!');
                const user = response.data;
                setMessage(`User ${user.name} Login successfully!`);
                setModalImg(suc);
                console.log(logindata);

                // Store user information in localStorage
                localStorage.setItem('user', JSON.stringify(user));

                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            } catch (error) {
                console.log(logindata);
                setModalImg(er);
                setModalMessage("User Does not exist or Invalid Credential's");
                console.error("User Does not exist or Invalid Credential's");
            }
        }
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='oppp'>
            <div className='kl1'>
                <div className='im1'>
                    <img src={log} alt='Rent N Roll Logo'/>
                </div>
                <div>
                    <div className='op11'>
                        <div className="signup">
                            <form onSubmit={handleLogin}>
                                <h2 className='hw'>Rent'N Roll</h2>
                                <label htmlFor="chk" aria-hidden="true">Login</label>
                                <input
                                    type="text"
                                    placeholder="User Email"
                                    id='u-name'
                                    required
                                    value={userMail}
                                    onChange={(e) => setUserMail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id='pass'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit">➔</button>
                                <p className='pt'>Don't you have an account?</p>
                                <p className='pt1' onClick={() => navigate('/signup')}>Create a New Account</p>
                            </form>
                        </div>
                    </div>
                </div>

                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Login Modal"
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="modal-content">
                <h2>{modalMessage}</h2>
                <img src={modalImg} alt='loading'/>
                <div className='pattu'>
                <button onClick={closeModal}>Close</button>
                </div>
                </div>
                </Modal>

            </div>
        </div>
    );
}

export default Login;

