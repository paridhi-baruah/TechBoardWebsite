import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Club from './Components/Club/Club';
import News from './Components/News/News';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Navbar></Navbar>
      <Switch>
          <Route path="/Club">
            <Club/>
          </Route>
          <Route path="/News">
            <News/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
