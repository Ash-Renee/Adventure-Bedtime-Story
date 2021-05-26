import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2C1 from '../../Point2/Point2C/Point2C1';
import Point2D1 from '../../Point2/Point2D/Point2D1';
import A_Start from '../../../../images/A_Start.jpeg';

const Point1B2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>HALP!</p>
<<<<<<< HEAD
                <Link onClick = {() => setSelected(true)} to="/2c1">me</Link>
                <Link onClick = {() => setSelected(true)} to="/2d1">you</Link>
                </div>
=======
                <Link onClick = {() => setSelected(true)} to="2c1">me</Link>
                <br />
                <br />
                <Link onClick = {() => setSelected(true)} to="2d1">you</Link>
                </>
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099
                :
                ""
            }

                <Router>
                    <Point2C1 path="2c1/*" />
                    <Point2D1 path="2d1/*" />

                </Router>

</div>
)
}

export default Point1B2
