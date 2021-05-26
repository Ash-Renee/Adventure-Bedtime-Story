import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import End4 from '../../Endings/EndA4';
import A_Start from '../../../../images/A_Start.jpeg';


const Point2D2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>GO THE FUCK TO SLEEP</p>
                <Link onClick = {() => setSelected(true)} to="/end4">me</Link>

                </div>
                :
                ""
            }

                <Router>
                    <End4 path="/end4/*" />

                </Router>

</div>
)
}

export default Point2D2