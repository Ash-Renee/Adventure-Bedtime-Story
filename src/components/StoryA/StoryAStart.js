import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Point1 from './Point1/Point1A/Point1';
import A_Start from '../../images/A_Start.jpeg';


const StoryAStart = () => {
    const [selected, setSelected] = useState(false);
    return (
    
        <div className = "wrapper">
            {
            
                !selected ?
                <div>
                    <div className = "img" style = {{backgroundImage:`url(${A_Start})`}}>
                        <Link onClick={() => setSelected(true)} to="1">Let's Go</Link>
                        
                    </div>
                    <div className = "textBox">
                        <p>This is whre the words go</p>
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
