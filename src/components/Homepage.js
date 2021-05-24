import React, { useState }from 'react';
import { Router, Link } from '@reach/router';
import StoryAStart from './StoryA/StoryAStart';
import StoryBStart from './StoryB/StoryBStart';


const Homepage = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div>
            {
                !selected ? 
                <>
                <p>Welcome to your bedtime story!  Please choose your story:</p>
                <Link onClick = {() => setSelected(true)} to="storya">Story A</Link>
                {/* <Link to="storyb">Story B</Link> */}
                </>
                :
                ""
            }

                <Router>
                    <StoryAStart path="storya" />
                    <StoryBStart path="storyb" />
                </Router>

        </div>
    )
}

export default Homepage
