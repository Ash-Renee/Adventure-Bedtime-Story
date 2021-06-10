import './App.css';
import { Router } from '@reach/router';
import Homepage from './components/Homepage';
import React, { useState} from 'react';
import Done from './Context/Done';


function App() {
  const [ done, setDone] = useState(false);
  return (
    <div className="App">
      <Done.Provider value={{done, setDone}}>
          <Router>
            <Homepage path ="/*" done= {done}/>
          </Router>
          </Done.Provider>
    </div>
  );
}
export default App;