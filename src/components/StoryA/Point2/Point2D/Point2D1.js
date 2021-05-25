import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2D2 from '/Point2D2';


const Point2D1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>YOu need to get your ass to sleep</p>
                <Link onClick = {() => setSelected(true)} to="/2d2">me</Link>

                </>
                :
                ""
            }

                <Router>
                    <Point2D2 path="/2d2/*" />

                </Router>

</div>
)
}

export default Point2D1