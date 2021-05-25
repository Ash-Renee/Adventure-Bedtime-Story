import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A1 from './Point1A1';

const Point1A = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>What i loved to do most was</p>
                <Link onClick = {() => setSelected(true)} to="1a1">Continue</Link>

                </>
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
