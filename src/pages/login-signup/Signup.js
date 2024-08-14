import Modal from 'react-modal';
import React, { useState } from 'react';
import axios from 'axios';
import './login-sign.css';
import suc from '../assert/login/loading.gif';
import er from '../assert/login/error.gif';
import log from '../assert/rent nroll logo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [phonenum, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [lisense, setLisense] = useState('');
    const [password, setPassword] = useState('');
    const [passworda, setPassworda] = useState('');
    const [message, setMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalImg, setModalImg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passworda) {
            setModalImg(er);
            setMessage("Passwords do not match.");
            setModalIsOpen(true);
            return;
        }

        setIsSubmitting(true);

        const datas = {
            name: username,
            email: email,
            pass: password,
            phone: phonenum,
            lisense: lisense
        };

        try {
            const response = await axios.post('http://localhost:9001/rental/signup', datas);
            const user = response.data;
            setModalMessage(`User ${user.name} created successfully!`);
            setModalImg(suc);
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        } catch (error) {
            console.error('Error during sign-up:', error);
            setModalMessage("Email Already Exist's");
            setModalImg(er);
        } finally {
            setIsSubmitting(false);
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='oppp'>
            <div className='kl1'>
                <div className='im1'>
                    <img src={log} alt='Rent n Roll Logo' />
                </div>
                <div>
                    <div className='op11'>
                        <div className="signup">
                            <form onSubmit={handleSubmit} className='oplo'>
                                <label htmlFor="chk" aria-hidden="true">Sign Up</label>
                                <input type="text" placeholder="Username" id="name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} required />
                                <input type="text" placeholder="+91 Mobile Number" id="phno"
                                    value={phonenum}
                                    onChange={(e) => setPhone(e.target.value)} required />
                                <input type="email" placeholder="Email" id="mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                                <input type="text" placeholder="License Id" id="license"
                                    value={lisense}
                                    onChange={(e) => setLisense(e.target.value)} required />
                                <input type="password" placeholder="Enter New Password" id="pass"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                                <input type="password" placeholder="Re-Enter Password" id="pass-con"
                                    value={passworda}
                                    onChange={(e) => setPassworda(e.target.value)} required />
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                                </button>
                            </form>
                            {message && <p>{message}</p>}
                        </div>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Signup Modal"
                        className="Modal"
                        overlayClassName="Overlay"
                    >
                        <div className="modal-content">
                            <h2>{modalMessage}</h2>
                            <img src={modalImg} alt="Modal Icon" />
                            <div className='pattu'>
                            <button onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Signup;
