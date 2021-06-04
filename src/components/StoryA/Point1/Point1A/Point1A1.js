import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1A2 from './Point1A2';
import A_Start from '../../../../images/A_Start.jpeg';

const Point1A1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="wrapper" >
            {
                !selected ?
                    <div>
                        <div className="img" style={
                            { backgroundImage: `url(${A_Start})` }}>
                        </div>
                        <div className="textBox">
                            <p>One day, Katie was dancing in the castle courtyard when she bumped
                            into her friend Amanda, the guard captain.
                            “Hi Amanda!” Katie said while twirling around.
                            “Hello Princess Katie! What a beautiful dance you are performing!” said the guard captain.</p>
                            <Link onClick={() => setSelected(true)} to="1a2">Continue</Link>
                        </div>
                    </div>
                    :
                    ""
            }

            <Router>
                <Point1A2 path="1a2/*" />

            </Router>

        </div >
    )
}

export default Point1A1
