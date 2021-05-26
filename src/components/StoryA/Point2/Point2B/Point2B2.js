import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import End2 from '../../Endings/EndA2';
import A_Start from '../../../../images/A_Start.jpeg';


const Point2B2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>almost done</p>
                <Link onClick = {() => setSelected(true)} to="end2">Finish</Link>

                </div>
                :
                ""
            }

                <Router>
                    <End2 path="end2/*" />

                </Router>

</div>
)
}

export default Point2B2
