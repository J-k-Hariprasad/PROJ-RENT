import '../home/Home.css'
import harr from '../assert/pn (1).png'
import xuv from '../assert/pn (2).png'
import alc from '../assert/pn (3).png'
import kia from '../assert/pn (4).png'
import safa from '../assert/pn (5).png'
import ear from '../assert/pn (6).png'
import scar from '../assert/pn (7).png'
import bolu from '../assert/pn (8).png'
import { useNavigate } from 'react-router-dom';
function Seven()
{
    const navigate=useNavigate();

    const handlebook =()=>
    {
        navigate('/book');
    }
    return(
        <div>
    <div className='ok'>
        <h2 className='head'>7 seater</h2>
        <div className='ol2'>
            <div className="card">
                <h3>TATA HARRIER</h3>
                <img src={harr} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>MAHINDRA XUV700</h3>
                <img src={xuv} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>HUNDAI ALCROZ</h3>
                <img src={alc} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>KIA CARENS</h3>
                <img src={kia} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>TATA SAFARRI</h3>
                <img src={safa} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>MARUTHI SUZUKI ERTIGA</h3>
                <img src={ear} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>MAHENDRA SCARPIO</h3>
                <img src={scar} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>MAHENDRA BOLERO</h3>
                <img src={bolu} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
        </div>
    </div>
        
    </div>
    )
}
export default Seven;