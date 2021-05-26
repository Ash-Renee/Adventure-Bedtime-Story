import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A2 from './Point1A2';
import A_Start from '../../../../images/A_Start.jpeg';

const Point1A1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>OMG LOVE YOUR DANCE</p>
                <Link onClick = {() => setSelected(true)} to="1a2">Continue</Link>
                </div>
                :
                ""
            }

                <Router>
                    <Point1A2 path="1a2/*" />

                </Router>

</div>
)
}

export default Point1A1
