import '../home/Home.css'
import hc1 from '../assert/FOUR SEATER/1-removebg-preview.png'
import hc2 from '../assert/FOUR SEATER/2-removebg-preview.png'
import hc3 from '../assert/FOUR SEATER/3-removebg-preview.png'
import hc4 from '../assert/FOUR SEATER/4-removebg-preview.png'
import hc5 from '../assert/FOUR SEATER/5-removebg-preview.png'
import hc6 from '../assert/FOUR SEATER/6-removebg-preview.png'
import hc7 from '../assert/FOUR SEATER/7-removebg-preview.png'
import hc8 from '../assert/FOUR SEATER/8-removebg-preview.png'
import hc9 from '../assert/FOUR SEATER/9-removebg-preview.png'
import hc10 from '../assert/FOUR SEATER/10-removebg-preview.png'
import hc11 from '../assert/FOUR SEATER/11-removebg-preview.png'
import hc12 from '../assert/FOUR SEATER/12.png'
import { useNavigate } from 'react-router-dom'

function Four()
{
    const navigate=useNavigate();

    const handlebook =()=>
    {
        navigate('/book');
    }
    return(
        <div>
    <div className='ok'>
        <h2 className='head'>4 seater</h2>
        <div className='ol2'>
            <div className="card">
                <h3>HONDA CITY</h3>
                <img src={hc1} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>SHIFT DESIRE</h3>
                <img src={hc2} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>HUNDAI I-20</h3>
                <img src={hc3} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>HUNDAI VERNA</h3>
                <img src={hc4} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>HONDA AMAZE</h3>
                <img src={hc5} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>HUNDAI CRETA</h3>
                <img src={hc6} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>SUZUKI FR0NX</h3>
                <img src={hc7} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>WOLSWAGEN POLO</h3>
                <img src={hc8} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>KIA SELTOS</h3>
                <img src={hc9} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>KIA SONET</h3>
                <img src={hc10} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>TOYOTA TAISOR</h3>
                <img src={hc11} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button onClick={handlebook} className="book-now" >Book Now</button>
            </div>       
            <div className="card">
                <h3>SCODA RAPID</h3>
                <img src={hc12} alt="Swift Dzire"/>
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
export default Four;