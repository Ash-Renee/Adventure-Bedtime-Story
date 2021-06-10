import React, { useState, useEffect, useContext }from 'react';
import { Router, Link } from '@reach/router';
import StoryAStart from './StoryA/StoryAStart';
import StoryBStart from './StoryB/StoryBStart';
import Done from '../Context/Done';
import starter_image from '../images/starter_image.jpg';

const Homepage = (props) => {
    const [selected, setSelected] = useState(false);
    const {done, setDone} = useContext(Done);
    useEffect(()=>{
        setSelected(false);
        setDone(false);
    },[done])
    return (
        <div className="wrapper">
            {
                !selected ? 
                <>
                <div className = "starter_image" style = {{backgroundImage:`url(${starter_image})`}}>
                    
                </div>
                <div className="textBoxLarge">
                <p>Welcome to your bedtime story!  Please choose your story:</p>
                <Link onClick = {() => setSelected(true)} to="storya">Story A</Link>
                <br />
                <Link onClick = {() => setSelected(true)} to="storyb">Story B</Link>
                <br />
                <Link onClick = {() => setSelected(true)} to="storyc">Story C</Link>
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
