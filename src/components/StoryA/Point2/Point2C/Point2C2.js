import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import End3 from '../../Endings/EndA3';
import A_Start from '../../../../images/A_Start.jpeg';


const Point2C2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>No thanks!</p>
                <Link onClick = {() => setSelected(true)} to="end3">me</Link>

                </div>
                :
                ""
            }

                <Router>
                    <End3 path="end3/*" />

                </Router>

</div>
)
}

export default Point2C2