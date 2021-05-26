import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
<<<<<<< HEAD
import Point2C2 from '/Point2C2';
import A_Start from '../../../../images/A_Start.jpeg';

=======
import Point2C2 from './Point2C2';
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099


const Point2C1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>No thanks!</p>
                <Link onClick = {() => setSelected(true)} to="2c2">me</Link>

                </div>
                :
                ""
            }

                <Router>
                    <Point2C2 path="2c2/*" />

                </Router>

</div>
)
}

export default Point2C1