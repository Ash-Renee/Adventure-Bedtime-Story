import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Homepage from '../../Homepage';

const EndA2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>Allegedly</p>
                <Link onClick = {() => setSelected(true)} to="/">Home</Link>
                </>
                :
                ""
            }

                <Router>
                    <Homepage path="/*" />

                </Router>

</div>
)
}


export default EndA2
