import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point2D2 from './Point2D2';
import A_2D1 from '../../../../images/A_2D1.jpg';



const Point2D1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <div className="wrapper">
                        <div className="point1b2" style={
                            { backgroundImage: `url(${A_2D1})` }}>
                        </div>
                        <div className="textBoxLarge">
                            <p>Princess Katie decided it would be safer to climb down into the canyon
                                and go around.  When she got to the bottom of the canyon, she found a wide
                                river that ran swiftly toward a waterfall.  In the middle of the river, 
                                hugging a large rock, was her friend Jamie the baker!  "Oh, Princess Katie!
                                Thank goodness you are here!  Please, help me!"
                            </p>
                            <Link onClick={() => setSelected(true)} to="2d2">Help Jamie</Link>
                        </div>
                    </div>
                :
                ""
            }

                <Router>
                    <Point2D2 path="2d2/*" />

                </Router>

</div>
)
}

export default Point2D1