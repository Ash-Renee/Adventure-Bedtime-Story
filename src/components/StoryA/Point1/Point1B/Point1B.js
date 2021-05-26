import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1B1 from './Point1B1';
import A_Start from '../../../../images/A_Start.jpeg';

const Point1B = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Sword fight!</p>
                <Link onClick = {() => setSelected(true)} to="/1b1">Continue</Link>
                </div>
                :
                ""
            }

                <Router>
                    <Point1B1 path="/1b1/*" />

                </Router>

</div>
)
}

export default Point1B
