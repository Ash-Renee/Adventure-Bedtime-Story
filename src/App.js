import './App.css';
import { Router } from '@reach/router';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
          <Router>
            <Homepage path ="/*" />
          </Router>
    </div>
  );
}
export default App;