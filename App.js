import './App.css';

import Title from './Title';
import Projects from './Projects';
import Blurb from './Blurb';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <section className="section">
              <Title />
              <Projects />
              <Blurb />
              <Footer />
            </section>
          </Route>
        </Switch>
      </Router>
  
      
    );
  }
  
  export default App;
  
