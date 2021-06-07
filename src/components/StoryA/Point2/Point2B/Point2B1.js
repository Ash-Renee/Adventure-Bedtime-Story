import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2B2 from './Point2B2';
import A_2B_P1 from '../../../../images/A_2B_P1.jpg';



const Point2B1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="wrapper">
            {
                !selected ?
                <div> 
                <div className = "point1" style = {
                    {backgroundImage:`url(${A_2B_P1})`}}>
                        </div>
                        <div className="textBox">
                <p>"No thank you, captain.  But good luck on your search!" Katie continued to twirl and twirl, eventually
                    making her way to the village square.
                </p>
                <Link onClick = {() => setSelected(true)} to="2b2">Continue</Link>
                    </div>
                </div>
                :
                ""
            }

                <Router>
                    <Point2B2 path="2b2/*" />

                </Router>

</div>
)
}

export default Point2B1
