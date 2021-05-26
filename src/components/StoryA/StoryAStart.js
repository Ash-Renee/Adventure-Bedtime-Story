import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1 from './Point1/Point1A/Point1';
import A_Start from '../../images/A_Start.jpeg';


const StoryAStart = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <div className = "img" style = {{backgroundImage:`url(${A_Start})`}}>
                        <p>Hello princess!</p>
<<<<<<< HEAD
                        {/* <img src={A_Start} alt="starter image" /> */}
                        <Link onClick={() => setSelected(true)} to="1a">Let's Go</Link>
                    </div>
=======
                        <img src={A_Start} alt="starter image" />
                        <Link onClick={() => setSelected(true)} to="1">Let's Go</Link>
                    </>
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099
                    :
                    ""
            }
            <Router>
                <Point1 path="1/*" />
            </Router>
        </div>
    )
}

export default StoryAStart
