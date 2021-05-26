import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1B1 from './Point1B1';


const Point1B = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>What i loved to do most was</p>
                <Link onClick = {() => setSelected(true)} to="1b1">Continu</Link>
                
                </>
                :
                ""
            }

                <Router>
                    <Point1B1 path="1b1/*" />


                </Router>

        </div>
    )
}

export default Point1B
