import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import EndA1 from '../../Endings/EndA1';
import A_2A_P2 from '../../../../images/A_2A_P2.jpg';


const Point2A2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div>
                <div className = "point2a2" style = {{backgroundImage:`url(${A_2A_P2})`}}>
                    </div>
                    <div className="textBoxLarge">
                <p>Up and down the castle steps, the two searched all around.
                    "What did the thief take?" Princess Katie asked.
                    "The thief took a sweet roll from the kitchen", Captain 
                    Amanda replied.  As the two climbed up to the higest tower,
                    they found a trail of crumbs.  Up and up and up the pair
                    climbed until they reacched the door to the tower room.
                </p>
                <Link onClick = {() => setSelected(true)} to="end1">Conclude</Link>
                <br />
                </div>
                </div>
                :
                ""
            }

                <Router>
                    <EndA1 path="end1/*" />

                </Router>

</div>
)
}

export default Point2A2
