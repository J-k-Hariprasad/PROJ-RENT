import '../login-signup/login-sign.css'
import tik from '../assert/tick-1024.webp'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function Admin()
{
    const [popupVisible, setPopupVisible] = useState(false);
    const navi=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setPopupVisible(true);
    };

    const handleBackToLogin = () => {
        setPopupVisible(false);
        navi('/admin/admindash')
    };

    return(
        <div className='kl'>
            <div className='op1'>
                <div class="signup">
                <form onSubmit={handleSubmit}>
                        <h2 className='hw'>Rent'N Roll</h2>
                        <label for="chk" aria-hidden="true">Admin's Login</label>
                        <input type="text" placeholder="Username" required=""/>
                        <input type="password" placeholder="Password" required=""/>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>

            {popupVisible && (
                <div className='pop'>
                    <img src={tik} alt='loading' />
                    <h4>Login Sucessfully</h4>
                    <button onClick={handleBackToLogin}>Go</button>
                </div>
            )}

        </div>
    )
}
export default Admin;