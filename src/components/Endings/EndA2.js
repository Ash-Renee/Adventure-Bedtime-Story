import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import End_A2 from '../../images/End_A2.jpg';
import Done from '../../Context/Done';

const EndA2 = () => {
    const [selected, setSelected] = useState(false);
    const { done, setDone } = useContext(Done);
    return (
        <div>
            {
                !selected ?
                    <div>
                        <div className="img" style={
                            { backgroundImage: `url(${End_A2})` }}>
                        </div>
                        <div className="textBoxLarge">
                            <p>Starting on that day, and every year after, the village celegrated Princess
                            Katie and her beautiful dancing with a festival.  All the bakers would make
                            the best desserts and all the musicians would play their instruments. Every
                            villager would join the King, the Queen, and the Princess in a dance that lasted
                            all day long.
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

export default EndA2

