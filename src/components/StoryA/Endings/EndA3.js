import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Homepage from '../../Homepage';
import A_Start from '../../../images/A_Start.jpeg';

const EndA3 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Allegedly</p>
                <Link onClick = {() => setSelected(true)} to="/">Home</Link>
                </div>
                :
                ""
            }

                <Router>
                    <Homepage path="/*" />

                </Router>

</div>
)
}


export default EndA3