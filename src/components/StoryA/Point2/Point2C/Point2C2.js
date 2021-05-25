import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import End3 from '../../Endings/EndA3';


const Point2C2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>No thanks!</p>
                <Link onClick = {() => setSelected(true)} to="/end3">me</Link>

                </>
                :
                ""
            }

                <Router>
                    <End3 path="/end3/*" />

                </Router>

</div>
)
}

export default Point2C2