import '../login-signup/login-sign.css'
import tik from '../assert/tick-1024.webp'
import { useNavigate } from 'react-router-dom';
function Popup()
{
    const navi=useNavigate;
    return(
    
            <div className='pop' id='pop '>
                <img src={tik} alt='loading'/>
                <h4>Account Created Sucessfylly </h4>
                <button onClick={()=>navi('/login')}>OK</button>
            </div>
    )
}
export default Popup;