import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2B2 from './Point2B2';
import A_Start from '../../../../images/A_Start.jpeg';



const Point2B1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>No thanks!</p>
                <Link onClick = {() => setSelected(true)} to="2b2">me</Link>

                </div>
                :
                ""
            }

                <Router>
                    <Point2B2 path="2b2/*" />

                </Router>

</div>
)
}

export default Point2B1
