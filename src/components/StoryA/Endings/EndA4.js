import React, { useState, useContext }from 'react';
import { Router, Link } from '@reach/router';
import Homepage from '../../Homepage';
<<<<<<< HEAD
import A_Start from '../../../images/A_Start.jpeg';
=======
import Done from '../../../Context/Done';
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099

const EndA4 = () => {
    const [selected, setSelected] = useState(false);
    const {done, setDone} = useContext(Done);
    return (
        <div>
            {
                !selected ? 
                <div className = "img" style = {
                    {backgroundImage:`url(${A_Start})`}}>
                <p>Allegedly</p>
<<<<<<< HEAD
                <Link onClick = {() => setSelected(true)} to="/">Home</Link>
                </div>
=======
                <Link onClick = {() => setDone(true)} to="/">Home</Link>
                </>
>>>>>>> 1a62302b19d4129c227b32634f821362a9fe1099
                :
                ""
            }

</div>
)
}

export default EndA4
