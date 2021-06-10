import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1B1 from './Point1B1';
import A_1B from '../../../../images/A_1B.jpg';


const Point1B = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <div>
                        <div className="img" style={
                            { backgroundImage: `url(${A_1B})` }}>
                        </div>
                        <div className="textBox">
                            <p>SWORD FIGHT! Princess Katie loved to play pretend and would imagine
                            she was a pirate or a knight of the realm!
                            </p>
                            <Link onClick={() => setSelected(true)} to="1b1">Continue</Link>
                        </div>
                    </div>
                    :
                    ""
            }
            <Router>
                <Point1B1 path="1b1/*" />
            </Router>

        </div>
    )
}

export default Point1B
