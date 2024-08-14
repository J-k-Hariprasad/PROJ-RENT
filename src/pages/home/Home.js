import React from 'react';
import '../home/Home.css';
import Seven from './Seven';
import Four from './Four';
import Hill from './Hill';
import Footer from './Footer';
import Navi from './nav/Navi';
import Footerabv from './Footerabv';

function Home() {   
    return (
        <div>
                <Navi/>
            <div className="main-content">
                <Seven />
                <Four />
                <Hill />
                <Footerabv/>
                <Footer /> 
            </div>
        </div>
    );
}
export default Home;
