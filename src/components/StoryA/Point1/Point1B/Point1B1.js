import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1B2 from './Point1B2';
import A_Start from '../../../../images/A_Start.jpeg';

const Point1B1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>HALP!</p>
<<<<<<< HEAD
                <Link onClick = {() => setSelected(true)} to="/1b2">Continue</Link>
                </div>
=======
                <Link onClick = {() => setSelected(true)} to="1b2">Continue</Link>
                </>
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099
                :
                ""
            }

                <Router>
                    <Point1B2 path="1b2/*" />

                </Router>

</div>
)
}

export default Point1B1
