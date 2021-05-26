import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2A2 from './Point2A2';
import A_Start from '../../../../images/A_Start.jpeg';


const Point2A1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>you got this</p>
                <Link onClick = {() => setSelected(true)} to="2a2">Continue</Link>
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
