import React, { useState, useEffect, useContext }from 'react';
import { Router, Link } from '@reach/router';
import StoryAStart from './StoryA/StoryAStart';
import StoryBStart from './StoryB/StoryBStart';
import Done from '../Context/Done';
import Starter_Image from '../images/Starter_Image.jpg';

const Homepage = (props) => {
    const [selected, setSelected] = useState(false);
    const {done, setDone} = useContext(Done);
    useEffect(()=>{
        setSelected(false);
    },[done])
    return (
        <div>
            {
                !selected ? 
                <>
                <div className = "img" style = {{backgroundImage:`url(${Starter_Image})`}}></div>
                <div className="textBox">
                <p>Welcome to your bedtime story!  Please choose your story:</p>
                <Link onClick = {() => setSelected(true)} to="storya">Story A</Link>
                {/* <Link to="storyb">Story B</Link> */}
                </div>
                </>
                :
                ""
            }

                <Router>
                    <StoryAStart path="storya/*" />
                    <StoryBStart path="storyb/*" />
                </Router>

        </div>
    )
}

export default Homepage
