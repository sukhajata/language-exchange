import React from 'react';
import Firebase from './services/firebase';
import FirebaseContext from './services/firebaseContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContentWithNavBar from './components/ContentWithNavBar';
import Menu from './components/Menu';

function App() {
  return (
    <FirebaseContext.Provider firebase={new Firebase()}>
      <BrowserRouter>
        <Switch>
          <Route 
            exact path="/"
            render={ props =>
              <ContentWithNavBar {...props}>
                <Menu {...props} handleClick={null} />
              </ContentWithNavBar>
            }
          />
        </Switch>
      </BrowserRouter>
    </FirebaseContext.Provider>
  );
}

export default App;
