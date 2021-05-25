import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import End2 from '../../Endings/EndA2';


const Point2B2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>almost done</p>
                <Link onClick = {() => setSelected(true)} to="/end2">Finish</Link>

                </>
                :
                ""
            }

                <Router>
                    <End2 path="/end2/*" />

                </Router>

</div>
)
}

export default Point2B2
