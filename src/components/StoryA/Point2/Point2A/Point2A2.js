import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import EndA1 from '../../Endings/EndA1';


const Point2A2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>Finish him!</p>
                <Link onClick = {() => setSelected(true)} to="end1">Conclude</Link>
                </>
                :
                ""
            }

                <Router>
                    <EndA1 path="end1/*" />

                </Router>

</div>
)
}

export default Point2A2
