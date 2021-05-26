import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2A1 from '../../Point2/Point2A/Point2A1';
import Point2B1 from '../../Point2/Point2B/Point2B1';
import A_Start from '../../../../images/A_Start.jpeg';


const Point1A2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Whatcha doin</p>
                <Link onClick = {() => setSelected(true)} to="2a1">2a</Link>
                <br />
                <Link onClick = {() => setSelected(true)} to="2b1">2b</Link>
                </div>
                :
                ""
            }

                <Router>
                    <Point2A1 path="2a1/*" />
                    <Point2B1 path="2b1/*" />

                </Router>

</div>
)
}

export default Point1A2
