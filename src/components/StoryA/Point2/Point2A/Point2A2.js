import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import EndA1 from '../../Endings/EndA1';
import A_Start from '../../../../images/A_Start.jpeg';


const Point2A2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Finish him!</p>
                <Link onClick = {() => setSelected(true)} to="/storya/end1">Conclude</Link>
                </div>
                :
                ""
            }

                <Router>
                    <EndA1 path="/storya/end1" />

                </Router>

</div>
)
}

export default Point2A2
