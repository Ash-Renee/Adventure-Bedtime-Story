import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2C2 from './Point2C2';
import A_2C1 from '../../../../images/A_2C1.jpg';



const Point2C1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="wrapper">
            {
                !selected ? 
                <div>
                <div className = "point2c1" style = {
                    {backgroundImage:`url(${A_2C1})`}}>
                        </div>
                        <div className="textBox">
                <p>Princess Katie decided to brave the canyon's divide and cross the fallen log 
                    bridge!  She walked steadily across, not once looking down, and made it safely
                    to the other side.  As she hopped off the log, she found herself face to face
                    with a very angry mama bear!</p>
                <Link onClick = {() => setSelected(true)} to="2c2">Save Me!</Link>

                </div>
                </div>
                :
                ""
            }

                <Router>
                    <Point2C2 path="2c2/*" />

                </Router>

</div>
)
}

export default Point2C1