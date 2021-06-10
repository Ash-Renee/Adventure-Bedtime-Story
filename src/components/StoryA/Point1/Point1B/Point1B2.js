import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point2C1 from '../../Point2/Point2C/Point2C1';
import Point2D1 from '../../Point2/Point2D/Point2D1';
import A_1B_P2 from '../../../../images/A_1B_P2.jpg';

const Point1B2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <div className="wrapper">
                        <div className="point1b2" style={
                            { backgroundImage: `url(${A_1B_P2})` }}>
                        </div>
                        <div className="textBoxLarge">
                            <p>Katie searched high and low, behind bushes and trees, and over
                            the river.  Every step she took, Katie could hear the echo of cries
                            as the person in trouble continued to call out, "Help! Oh, Please!
                            Won't somebody help me?"
                            As Princess Katie came to a canyon, she had a choice to make.  Would
                            she try to cross along the fallen log bridge or would she go down into
                            the canyon and cross?</p>
                            <Link onClick={() => setSelected(true)} to="2c1">Log Bridge</Link>
                            <br />
                            <Link onClick={() => setSelected(true)} to="2d1">Canyon</Link>
                        </div>
                    </div>
                    :
                    ""
            }

            <Router>
                <Point2C1 path="2c1/*" />
                <Point2D1 path="2d1/*" />

            </Router>

        </div>
    )
}

export default Point1B2
