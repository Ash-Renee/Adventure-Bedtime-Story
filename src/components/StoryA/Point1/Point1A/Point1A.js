import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A1 from './Point1A1';
import A_1A_P1 from '../../../../images/A_1A_P1.jpg';
import Point1B from '../Point1B/Point1B';



const Point1A = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className = "wrapper" >
            {
                !selected ? 
                <div>
                    <div className = "img" style = {{backgroundImage:`url(${A_1A_P1})`}}>
                    </div>
                    <div className = "textBox">
                    <p>DANCE! Katie loved to dance and would often dance for hours without music!</p>
                <Link onClick = {() => setSelected(true)} to="1a1">I love your dance!</Link>
                <br />
                </div>
                </div>
                :
                ""
            }

                <Router>
                    <Point1A1 path="1a1/*" />
                </Router>

        </div>
    )
}

export default Point1A