import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1B2 from './Point1B2';
import A_1B_P1 from '../../../../images/A_1B_P1.jpg';

const Point1B1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <div className="wrapper">
                        <div className="img" style={
                            { backgroundImage: `url(${A_1B_P1})` }}>
                        </div>
                        <div className="textBoxLarge">
                            <p>On a particularly beautiful afternoon, Princess Katie
                            was outside practicing with her wood sword, when a cry
                            for help came from somewhere in the valley where she lived.
                            "Help! Someone please help me!" the voice cried.  Katie knew
                            what she had to do!  Jumping into action, Katie went off in search
                            of the person in need of help!
                </p>
                            <Link onClick={() => setSelected(true)} to="1b2">Continue</Link>
                        </div>
                    </div>
                    :
                    ""
            }

            <Router>
                <Point1B2 path="1b2/*" />

            </Router>

        </div >
    )
}

export default Point1B1
