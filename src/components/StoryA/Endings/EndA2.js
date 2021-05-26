import React, { useState, useContext }from 'react';
import { Router, Link } from '@reach/router';
import Homepage from '../../Homepage';
import A_Start from '../../../images/A_Start.jpeg';
import Done from '../../../Context/Done';

const EndA2 = () => {
    const [selected, setSelected] = useState(false);
    const {done, setDone} = useContext(Done);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Allegedly</p>
                <Link onClick = {() => setDone(true)} to="/">Home</Link>
                </div>
                :
                ""
            }

</div>
)
}

export default EndA2

