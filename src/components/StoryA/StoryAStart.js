import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1 from './Point1/Point1';
import A_Start from '../../images/A_Start.jpeg';
import Point1A2 from './Point1/Point1A/Point1A2';



const StoryAStart = () => {
    const [selected, setSelected] = useState(false);
    return (
    
        <div className = "wrapper">
            {
            
                !selected ?
                <div>
                    <div className = "img" style = {{backgroundImage:`url(${A_Start})`}}>
                    </div>
                    <div className = "textBox">
                        <p>Once upon a time there was a young princess named Katie. 
                            She lived in a faraway kingdom called Illomorrow with her mother,
                            father, and little sister Maggie.</p>
                        <Link onClick={() => setSelected(true)} to="1">Let's Go</Link>
                    </div>

                </div>
                    :
                    ""
                
            }
            
            <Router>
                <Point1 path="1/*" />
            </Router>
        </div>
    
    )
}

export default StoryAStart
