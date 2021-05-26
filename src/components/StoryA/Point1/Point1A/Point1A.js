import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A1 from './Point1A1';
import A_Start from '../../../../images/A_Start.jpeg';

const Point1A = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>What i loved to do most was</p>
                <Link onClick = {() => setSelected(true)} to="1a1">Continue</Link>

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
