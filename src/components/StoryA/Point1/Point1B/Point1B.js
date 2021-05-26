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
<<<<<<< HEAD
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Sword fight!</p>
                <Link onClick = {() => setSelected(true)} to="/1b1">Continue</Link>
                </div>
=======
                <>
                <p>What i loved to do most was</p>
                <Link onClick = {() => setSelected(true)} to="1b1">Continu</Link>
                
                </>
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099
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
