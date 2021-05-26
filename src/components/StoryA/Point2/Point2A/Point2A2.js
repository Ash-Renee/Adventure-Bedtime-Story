import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import EndA1 from '../../Endings/EndA1';
import A_Start from '../../../../images/A_Start.jpeg';


const Point2A2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Finish him!</p>
<<<<<<< HEAD
                <Link onClick = {() => setSelected(true)} to="/storya/end1">Conclude</Link>
                </div>
=======
                <Link onClick = {() => setSelected(true)} to="end1">Conclude</Link>
                </>
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099
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
