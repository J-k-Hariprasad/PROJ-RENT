import '../home/Home.css'
function Hill()
{
    return(
        <div>
    <div className='ok'>
        <h2 className='head'>Hill Climbers</h2>
        <div className='ol2'>
            <div className="card">
                <h3>Force Motors Gurkha</h3>
                <img src={Jeep} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button className="book-now">Book Now</button>
            </div>       
            <div className="card">
                <h3>MAHINDRA THAR</h3>
                <img src={thar} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button className="book-now">Book Now</button>
            </div>       
            <div className="card">
                <h3>JEEP WRANGLER</h3>
                <img src={gur} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button className="book-now">Book Now</button>
            </div>       
            <div className="card">
                <h3>MARUTI SUZUKI JIMMY</h3>
                <img src={jimm} alt="Swift Dzire"/>
                <div className="details">
                    <p>&#10004; 24 Hours: ₹ 2000</p>
                    <p>&#10004; Extra Hour: ₹ 300</p>
                </div>
                <button className="book-now">Book Now</button>
            </div>             
        </div>
    </div>
        
    </div>
    )
}
export default Hill;