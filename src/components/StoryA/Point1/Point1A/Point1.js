import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A from './Point1A';
import A_1A_P1 from '../../../../images/A_1A_P1.jpg';

const Point1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className="img" style={
                    { backgroundImage: `url(${A_1A_P1})` }}>
                    <div className="textBox"></div>
                    <p>Hi I'm the princess</p>
                    <Link onClick = {() => setSelected(true)} to="1a">Continue</Link>
                </div>
                :
                ""
            }
                <Router>
                    <Point1A path="1a/*" />
                </Router>

        </div>
    )
}

export default Point1