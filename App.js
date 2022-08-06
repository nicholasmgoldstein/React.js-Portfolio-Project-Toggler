
//import Identifier from './artifacts/contracts/Identifier.sol/Identifier.json';

import './App.css';

import Title from './Title';
import Projects from './Projects';
import Blurb from './Blurb';
import Footer from './Footer';

import Blok from './Components/BlokSite/Blok';
import BlokAdmin from './Components/BlokSite/BlokAdmin';

import Persona from './Components/PersonaSite/Persona';
import PersonaAdmin from './Components/PersonaSite/PersonaAdmin';

/*import BlokracyWP from './Whitepapers/Blokracy';
import PersonaWP from './Whitepapers/Persona256';*/

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

///Localhost
const personaAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

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
  
          <Route exact path="/blokracy">
            <section>
              <Blok />
            </section>
          </Route>
  
          <Route exact path="/blokracyAdmin">
            <section>
              <BlokAdmin />
            </section>
          </Route>
  
          <Route exact path="/Whitepapers/blokracy">
            <section>
              {/*<BlokracyWP />*/}
            </section>
          </Route>
  
          <Route exact path="/persona256">
            <section>
              <Persona />
            </section>
          </Route>
  
          <Route exact path="/persona256Admin">
            <section>
              <PersonaAdmin />
            </section>
          </Route>
  
          <Route exact path="/Whitepapers/persona256">
            <section>
              {/*<PersonaWP />*/}
            </section>
          </Route>
  
        </Switch>
  
      </Router>
  
      
    );
  }
  
  export default App;
  