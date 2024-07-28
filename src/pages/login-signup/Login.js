import '../login-signup/login-sign.css'
import { useNavigate } from 'react-router-dom';
function Login()
{
    const navigate=useNavigate();


    const handleLogin = () => {
        // const navigate = useNavigate();
        const ss = document.getElementById('name');
        const pp = document.getElementById('pass');
        
    
            // setSnackbarMessage('Sign Up successful');
            // setOpenSnackbar(true);
                navigate('/home');
                setTimeout(() => {
                  window.location.href = '/home'; 
                }, 2000); 
        };



    return(
        <div className='kl'>
            <div className='op1'>
                <div class="signup">
                    <form>
                        <h2 className='hw'>Rent'N Roll</h2>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="text" placeholder="Username" id='u-name' required=""/>
                        <input type="password" placeholder="Password" id='pass' required=""/>
                        <button onClick={handleLogin}>Login</button>
                        <p className='pt'>Don't you have an account?</p>
                        <button onClick={()=>navigate('signup')}>Sign Up</button>
                        <button className='amn' onClick={()=>navigate('admin')}>Admin's Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;