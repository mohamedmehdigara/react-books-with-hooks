import './App.css';
import { Search } from './Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { Home } from './Home';
import React from 'react';


function App() {
  return (
    <div className="App">
  <Router>
    <header>
      <div>Books with Hooks</div>
      <ul className="menu"><li><Link to="/">Home</Link></li><li><Link to="/search">Search</Link></li></ul>
    </header>
    <Security issuer='https://{YourOktaDomain}/oauth2/default'
              clientId='{ClientId}'
              redirectUri={window.location.origin + '/callback'}
              pkce={true}>
      <Route path='/' exact={true} component={Home}/>
      <SecureRoute path='/search' exact={true} component={Search}/>
      <Route path='/callback' component={LoginCallback}/>
    </Security>
  </Router>
</div>
  );
}

export default App;
