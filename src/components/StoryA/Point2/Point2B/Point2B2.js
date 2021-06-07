import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import EndA2 from '../../Endings/EndA2';
import A_2B_P2 from '../../../../images/A_2B_P2.jpg';


const Point2B2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="wrapper" >
        {
            !selected ?
                <div>
                    <div className="end1" style={
                        { backgroundImage: `url(${A_2B_P2})` }}>
                    </div>
                    <div className="textBoxLarge">
                        <p>As Princess Katie continued to dance, a fiddler soon joined her
                            and played a lively song to match her every step.  Soon she was
                            joined by the other children of the village and then by all
                            the adults.  As other musicians joined the fiddler, the whole village
                            was dancing and singing and having fun!</p>
                        <Link onClick={() => setSelected(true)} to="end2">Conclude</Link>
                    </div>
                </div>
                :
                ""
        }

                <Router>
                    <EndA2 path="end2/*" />

                </Router>

</div>
)
}

export default Point2B2
