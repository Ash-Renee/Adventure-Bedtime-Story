import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point2A1 from '../../Point2/Point2A/Point2A1';
import Point2B1 from '../../Point2/Point2B/Point2B1';
import A_1A_P2 from '../../../../images/A_1A_P2.jpg';


const Point1A2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ?
                    <div>
                        <div className="point_1a2" style={
                            { backgroundImage: `url(${A_1A_P2})` }}>
                        </div>
                        <div className="textBoxLarge">
                            <p>“Thank you, captain!” Katie bowed and continued to twirl around her friend.
                            As the princess danced, Captain Amanda searched the courtyard for something.
                            “What are you doing?” Katie asked, now curious about her friend’s actions.
                            “Why, I’m searching for a thief! Would you like to help me search for them?
</p>
                            <Link onClick={() => setSelected(true)} to="2a1">2a</Link>
                            <br />
                            <Link onClick={() => setSelected(true)} to="2b1">2b</Link>
                        </div>
                    </div>
                    :
                    ""
            }

            <Router>
                <Point2A1 path="2a1/*" />
                <Point2B1 path="2b1/*" />

            </Router>

        </div>
    )
}

export default Point1A2
