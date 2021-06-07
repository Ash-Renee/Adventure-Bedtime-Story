import React, { useState, useContext } from 'react';
import { Router, Link } from '@reach/router';
import Homepage from '../../Homepage';
import End1 from '../../../images/End1.jpg';
import Done from '../../../Context/Done';


const EndA1 = () => {
    const [selected, setSelected] = useState(false);
    const { done, setDone } = useContext(Done);
    return (
        <div>
            {
                !selected ?
                    <div>
                        <div className="end1" style={{ backgroundImage: `url(${End1})` }}>
                        </div>
                        <div className="textBox2">
                            <p>Behind the door, in the room of the highest tower, there sat Princess
                            Katie's pet dog, Ruffles.  Ruffles was enjoying the sweet roll he
                            had taken from the kitchen!  The friends laughed as Ruffles finished
                            up the sweet roll and wagged his tail!
                </p>
                            <Link onClick={() => setDone(true)} to="/">Home</Link>
                            <br />
                        </div>
                    </div>
                    :
                    ""
            }

        </div>
    )
}

export default EndA1
