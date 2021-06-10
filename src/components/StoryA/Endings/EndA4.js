import React, { useState, useContext }from 'react';
import { Link } from '@reach/router';
import End4 from '../../../images/End4.jpg';
import Done from '../../../Context/Done';

const EndA4 = () => {
    const [selected, setSelected] = useState(false);
    const {done, setDone} = useContext(Done);
    return (
        <div className="wrapper">
        {
            !selected ?
                <div>
                    <div className="end4" style={
                        { backgroundImage: `url(${End4})` }}>
                    </div>
                    <div className="textBox3">
                        <p>"Oh, thank you Princess Katie!  You saved me from falling over the waterfall!" Jamie gave her friend
                            a great, big hug.  "You are very welcome, Jame! Now, let's get you home so you can dry off!"  Katie 
                            smiled and hugged her friend back.  "Yes please!  And when we get back to the castle, I have a sweet
                            roll waiting for both of us!"  
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

export default EndA4
