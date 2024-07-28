import '../home/Home.css'
import Seven from './Seven'
import Four from './Four'
import Hill from './Hill';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
function Home()
{
    const navi = useNavigate();
    return(
        <div>
           
        <div className="nav">
            <p>Rent'N Roll</p>
            <div className='ol'>
                <a >Home</a>
                <a>Policy</a>
                <a>Why us?</a>
                <a href='/service'>Services</a>
                <a>About us</a>
            </div>
        </div>
        <Seven/>
        <Four/>
        <Hill/>
        <Footer/>
    </div>


    )
}
export default Home;