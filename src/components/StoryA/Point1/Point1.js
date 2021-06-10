import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import Point1A from './Point1A/Point1A';
import A_1A from '../../../images/A_1A.jpeg';
import Point1B from './Point1B/Point1B';

const Point1 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div >
            {
                !selected ? 
                <div className = "wrapper" >
                    <div className = "point1" style = {{backgroundImage:`url(${A_1A})`}}>
                    </div>
                    <div className = "textBox2">
                    <p>Katie loved to read and cartwheel and sword fight! But the thing she loved to do most of all was…</p>
                <Link onClick = {() => setSelected(true)} to="1a">Dance!</Link>
                <br />
                <Link onClick = {() => setSelected(true)} to="1b">Sword Fight!</Link>

                </div>
                </div>
                :
                ""
            }

                <Router>
                    <Point1A path="1a/*" />
                    <Point1B path="1b/*" />

                </Router>

        </div>
    )
}

export default Point1