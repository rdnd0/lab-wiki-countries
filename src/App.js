import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './pages/Detail';
import Countries from './pages/Countries';
import countries from './data/countries.json'



class App extends Component {
  state = {
    clicado: {}
  }
  updateState = (childrenReference) => {
    let country = countries.filter((country =>
      country.cca3 === childrenReference
    ))
    console.log(country)
    this.setState({
      clicado: country[0],
    })
  }
  render() {
    return (
      <Router>
      <Switch>
        <div className="main">

        <Route path="/" callback={this.updateState} component={Countries}/>
        <Route path="/:id" render={() => {
        return <Detail parentCountry={this.state.clicado} />}}/>

        </div>
      </Switch>
    </Router>


    );
  }
}

export default App;
