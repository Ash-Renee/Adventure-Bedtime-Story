import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A1 from './Point1A1';
<<<<<<< HEAD
import A_Start from '../../../../images/A_Start.jpeg';
=======
import Point1B from '../Point1B/Point1B';
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099

const Point1A = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>What i loved to do most was</p>
                <Link onClick = {() => setSelected(true)} to="1a1">Continue to a</Link>
                <br />
                <br />
                <Link onClick = {() => setSelected(true)} to="1b">got to B</Link>

                </div>
                :
                ""
            }

                <Router>
                    <Point1A1 path="1a1/*" />
                    <Point1B path="1b/*" />

                </Router>

        </div>
    )
}

export default Point1A
