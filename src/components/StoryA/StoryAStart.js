import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1A from './Point1/Point1A/Point1A';
import A_Start from '../../images/A_Start.jpeg';


const StoryAStart = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <>
                        <p>Hello princess!</p>
                        <img src={A_Start} alt="starter image" />
                        <Link onClick={() => setSelected(true)} to="1a">Let's Go</Link>
                    </>
                    :
                    ""
            }
            <Router>
                <Point1A path="1a/*" />
            </Router>
        </div>
    )
}

export default StoryAStart
