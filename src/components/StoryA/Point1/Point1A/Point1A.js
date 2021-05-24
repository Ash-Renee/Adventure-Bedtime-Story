import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Story1A1 from './Point1A1';

const Point1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>What i loved to do most was</p>
                <Link onClick = {() => setSelected(true)} to="story1a1">continue</Link>

                </>
                :
                ""
            }

                <Router>
                    <Story1A1 path="storya/1a" />

                </Router>

        </div>
    )
}

export default Point1
