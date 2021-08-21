import './App.css';
import Questions from './components/Questions';
import SubmitMessage from './components/SubmitMessage';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
          <div className="container">
          <Switch>
          <Route path="/" exact>
          <h1 className="text-center">Question Bank Demo</h1>
              <Questions />
            </Route>
            <div>
              <Route path="/submit" exact>
                <SubmitMessage />
              </Route>
            </div>
          </Switch>
          
          
      </div>
    </Router>

  );
}

export default App;
