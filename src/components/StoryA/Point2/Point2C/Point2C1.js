import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2C2 from '/Point2C2';


const Point2C1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>No thanks!</p>
                <Link onClick = {() => setSelected(true)} to="/2c2">me</Link>

                </>
                :
                ""
            }

                <Router>
                    <Point2C2 path="/2c2/*" />

                </Router>

</div>
)
}

export default Point2C1