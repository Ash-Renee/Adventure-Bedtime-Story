import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A from './Point1A';

const Point1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>Hi I'm the princess</p>
                <Link onClick = {() => setSelected(true)} to="1a">Continue</Link>
                </>
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