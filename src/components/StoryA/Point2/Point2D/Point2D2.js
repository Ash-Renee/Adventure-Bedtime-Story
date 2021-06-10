import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import End4 from '../../Endings/EndA4';
import A_2D2 from '../../../../images/A_2D2.jpg';


const Point2D2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
        {
            !selected ?
                <div className="wrapper">
                    <div className="point2c2" style={
                        { backgroundImage: `url(${A_2D2})` }}>
                    </div>
                    <div className="textBoxLarge">
                        <p>Princess Katie jumped into action and hiked up the skirt of her dress.  As she
                            walked into the water, she stuck the tip of her wooden sword out far enough
                            to reach her friend Jamie.  As quick as she could, Jamie reached out for Katie's
                            sword and grabbed hold.  Using all of her strength, Princess Katie pulled Jamie
                            the baker back to the shore of the river."
                        </p>
                        <Link onClick={() => setSelected(true)} to="end4">conclusion</Link>
                    </div>
                </div>
                :
                ""
            }

                <Router>
                    <End4 path="end4/*" />

                </Router>

</div>
)
}

export default Point2D2