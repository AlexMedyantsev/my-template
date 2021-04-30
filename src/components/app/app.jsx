import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import history from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import moment from 'moment'

function App() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
          </Route>
        </Switch>
      </Router>
    )
}

const mapStateToProps = (state) => {
  return {
    // cards: getCards(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  // setActiveSeason: (season) => dispatch(ActionCreatorCondition.setActiveSeason(season)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
