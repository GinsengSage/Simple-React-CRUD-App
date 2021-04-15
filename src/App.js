import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {AlertState} from "./context/alert/AlertState";
import {FireBaseState} from "./context/firebase/FireBaseState";

function App() {
  return (
      <FireBaseState>
          <AlertState>
              <BrowserRouter>
                  <Navbar></Navbar>
                  <div className="container pt-4">
                      <Switch>
                          <Route path={'/'} exact component={Home}/>
                          <Route path={'/about'} component={About}/>
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </FireBaseState>
  );
}

export default App;
