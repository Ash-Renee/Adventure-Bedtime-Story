import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import End3 from '../../../Endings/EndA3';
import A_2C2 from '../../../../images/A_2C2.jpg';


const Point2C2 = () => {
    const [selected, setSelected] = useState(false);
    return (
<div className="wrapper">
            {
                !selected ? 
                <div>
                <div className = "point2c2" style = {
                    {backgroundImage:`url(${A_2C2})`}}>
                        </div>
                        <div className="textBox3">
                <p>Behind the angry bear was none other than Katie's little sister,
                    Princess Maggie! "Oh, Katie!  Thank goodness!  Please, save me from the 
                    bear!  Once again the princess jumped into action and raised up her arms
                    high, wooden sword in one hand!  She waved her hands wildly around and screamed
                    at the top of her lungs!  Startled, the bear quickly turned around and ran away."
                </p>
                <Link onClick = {() => setSelected(true)} to="end3">Conclusion</Link>

                </div>
                </div>
                :
                ""
            }

                <Router>
                    <End3 path="end3/*" />

                </Router>

</div>
)
}

export default Point2C2