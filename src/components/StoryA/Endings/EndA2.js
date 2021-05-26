import React, { useState, useContext }from 'react';
import { Router, Link } from '@reach/router';
import Homepage from '../../Homepage';
import Done from '../../../Context/Done';

const EndA2 = () => {
    const [selected, setSelected] = useState(false);
    const {done, setDone} = useContext(Done);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>Allegedly</p>
                <Link onClick = {() => setDone(true)} to="/">Home</Link>
                </>
                :
                ""
            }

</div>
)
}

export default EndA2

