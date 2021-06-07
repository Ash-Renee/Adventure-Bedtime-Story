import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2A2 from './Point2A2';
import A_2A_P1 from '../../../../images/A_2A_P1.jpg';


const Point2A1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div>
                <div className = "point2a1" style = {{backgroundImage:`url(${A_2A_P1})`}}>
                        </div>
                        <div className="textBox">
                <p>"That sounds like fun! Yes, please! I would like to help you
                    search for the thief!" And so, the two friends set off in 
                    search of the thief.
                </p>
                <Link onClick = {() => setSelected(true)} to="2a2">Continue</Link>
                <br />
                </div>
                </div>
                :
                ""
            }

                <Router>
                    <Point2A2 path="2a2/*" />

                </Router>

</div>
)
}

export default Point2A1
