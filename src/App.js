import React, { Component } from 'react';
import Header from './Components/header'
import Login from './Components/login'
import Home from './Components/home'
import { BrowserRouter , Route, Redirect, Switch } from 'react-router-dom'


class App extends Component {
  
  state={
    isAuthenticated: JSON.parse(sessionStorage.getItem('isAuthenticated'))
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header isAuthenticated={this.state.isAuthenticated}/>
          <Switch>
            {
              this.state.isAuthenticated ? 
                <Route path="/" render={(props) => (
                  <Home/>
                )}/>
              : <Route path="/" render={(props) => (
                  <Login />
              )}/>
            }
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
