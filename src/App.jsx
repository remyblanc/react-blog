import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './redux/store';
import { connect } from 'react-redux';
import styled from 'styled-components';

//styles
import { theme, macbook, mobile, gradient } from './lib/theme';

//images
import loader from "./lib/loader.svg";

//Pages
import MainPage from "./Pages/MainPage";

//Components

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <img className="loader" alt="" src={loader}/>
          <Switch>
            <Route exact path="/" component={MainPage}/>
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(App);