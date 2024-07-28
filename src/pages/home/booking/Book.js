import '../booking/Book.css'
import { useNavigate } from 'react-router-dom';
function Book()
{
 
    return(
        <div className='kq'>
            <div className='opp'>
                <div class="signu">
                    <form>
                        <div className='hf'>Rent Your Dream Car</div>
                        <div className='date'>
                            <div className='fo'>
                        Pickup Date
                            <input type='date' id='pickdate' className='da2'/>
                            </div>
                            <div className='fo'>
                        Drop Date
                            <input type='date' id='drop date'className='da2'/>
                            </div>
                        </div>
                        <input className='nput' type="text" placeholder="Username" required=""/>
                        <input className='nput' type="mail" placeholder="Email" required=""/>
                        <select className="nput1">
                            <option>Select your City</option>
                            <option>Coimbatore</option>
                            <option>Chennai</option>
                            <option>Trichy</option>
                            <option>Thanjaovr</option>
                            <option>Thiruvarur</option>
                        </select>
                        <input className='nput' type="text" placeholder="Address" required=""/>
                        <input className='nput' type="text" placeholder="+91 Phone Number" required=""/>
                        <select className="nput1">
                            <option>Is any Special Occation</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        
            <button className='utton'>Book My Car</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Book;