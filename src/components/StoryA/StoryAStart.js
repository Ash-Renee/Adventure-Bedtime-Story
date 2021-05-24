import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1A from './Point1/Point1A/Point1A';


const StoryAStart = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <>
                        <p>Hello princess!</p>
                        <Link onClick={() => setSelected(true)} to="1a">Continue</Link>
                    </>
                    :
                    ""
            }
            <Router>
                <Point1A path="/storya/1a" />
            </Router>
        </div>
    )
}

export default StoryAStart
