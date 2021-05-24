import './App.css';
import { Router, Link } from '@reach/router';
import Homepage from './components/Homepage';
import StoryAStart from './components/StoryA/StoryAStart';
import Point1A from './components/StoryA/Point1/Point1A/Point1A';
import Point1B from './components/StoryA/Point1/Point1B/Point1B';
import Point1A1 from './components/StoryA/Point1/Point1A/Point1A1';
import Point1A2 from './components/StoryA/Point1/Point1A/Point1A2';
import Point2A from './components/StoryA/Point2/Point2A/Point2A';
import Point2A1 from './components/StoryA/Point2/Point2A/Point2A1';
import Point2A2 from './components/StoryA/Point2/Point2A/Point2A2';
import Point1B1 from './components/StoryA/Point1/Point1B/Point1B1';
import Point1B2 from './components/StoryA/Point1/Point1B/Point1B2';
import Point2C from './components/StoryA/Point2/Point2C/Point2C';
import Point2C1 from './components/StoryA/Point2/Point2C/Point2C1';
import Point2C2 from './components/StoryA/Point2/Point2C/Point2C2';
import Point2D from './components/StoryA/Point2/Point2D/Point2D';
import Point2D1 from './components/StoryA/Point2/Point2D/Point2D1';
import Point2D2 from './components/StoryA/Point2/Point2D/Point2D2';
import Point2B from './components/StoryA/Point2/Point2B/Point2B';
import Point2B1 from './components/StoryA/Point2/Point2B/Point2B1';
import Point2B2 from './components/StoryA/Point2/Point2B/Point2B2';

import EndA1 from './components/StoryA/Endings/EndA1';
import EndA2 from './components/StoryA/Endings/EndA2';
import EndA3 from './components/StoryA/Endings/EndA3';
import EndA4 from './components/StoryA/Endings/EndA4';

function App() {
  return (
    <div className="App">

          <Router>
            <Homepage path ="/*" />
            <StoryAStart path="/storya" />
            <Point1A path="/storya/1a" />
            <Point1B path="/storya/1b" />
            <Point1A1 path="/storya/1a1"/>
            <Point1A2 path="/storya/1a2"/>
            <Point2A path="/storya/2a"/>
            <Point2A1 path="/storya/2a1"/>
            <Point2A2 path="/storya/2a2"/>
            <EndA1 path="/storya/end1"/>
            <EndA2 path="/storya/end2"/>
            <EndA3 path="/storya/end3"/>
            <EndA4 path="/storya/end4"/>
            <Point1B1 path="/storya/1b1"/>
            <Point1B2 path="/storya/1b2"/>
            <Point2C path="/storya/2c"/>
            <Point2C1 path="/storya/2c1"/>
            <Point2C2 path="/storya/2c2"/>
            <Point2D path="/storya/2d"/>
            <Point2D1 path="/storya/2d1"/>
            <Point2D2 path="/storya/2d2"/>
            <Point2B path="/storya/2b"/>
            <Point2B1 path="/storya/2b1"/>
            <Point2B2 path="/storya/2b2"/>
            <Point2D path="/storya/2d"/>
            <Point2D1 path="/storya/2d1"/>
            <Point2D2 path="/storya/2d2"/>
          </Router>
        
    </div>
  );
}

export default App;
