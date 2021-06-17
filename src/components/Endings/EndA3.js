import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import End3 from '../../images/End3.jpg';
import Done from '../../Context/Done';

const EndA3 = () => {
    const [selected, setSelected] = useState(false);
    const { done, setDone } = useContext(Done);
    return (
        <div className="wrapper">
            {
                !selected ?
                    <div>
                        <div className="point2a1" style={
                            { backgroundImage: `url(${End3})` }}>
                        </div>
                        <div className="textBox3">
                            <p>Princess Katie rushed to her sister's side and picked her up.  She carried her sister
                                piggyback across the fallen log bridge and back up to the castle.  When
                                they finally reached home, it was time for bed.  Princess Katie tucked Maggie
                                into bed and kissed her goodnight.  "Thank you for saving me, Katie", said Princess
                                Maggie as she closed her eyes.  "You're welcome, Maggie", said Princess Katie as she
                                turned off the lights.  
                </p>
                            <Link onClick={() => setDone(true)} to="/">Home</Link>

                        </div>
                    </div>
                    :
                    ""
            }

</div>
)
}

export default EndA3
