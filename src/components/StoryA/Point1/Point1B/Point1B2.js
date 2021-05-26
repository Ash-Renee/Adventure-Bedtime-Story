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
                <Link onClick = {() => setSelected(true)} to="2c1">me</Link>
                <Link onClick = {() => setSelected(true)} to="2d1">you</Link>
                </div>
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
