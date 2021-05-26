import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
<<<<<<< HEAD
import Point2D2 from '/Point2D2';
import A_Start from '../../../../images/A_Start.jpeg';

=======
import Point2D2 from './Point2D2';
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099


const Point2D1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>YOu need to get your ass to sleep</p>
                <Link onClick = {() => setSelected(true)} to="2d2">me</Link>

                </div>
                :
                ""
            }

                <Router>
                    <Point2D2 path="2d2/*" />

                </Router>

</div>
)
}

export default Point2D1