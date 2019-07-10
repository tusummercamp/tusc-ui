import './App.less';
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { DispatchProp, connect } from 'react-redux';

import { history } from './_helpers/history'
import { alertActions } from './_actions/alert.actions'
import HomePage from './Pages/HomePage';
import SettingsPage from './Pages/SettingsPage';


type Props = DispatchProp & {

}

class App extends React.PureComponent<Props> {

  componentDidMount() {
    history.listen((location, action) => {
      this.props.dispatch(alertActions.clear())
    })
  }

  render() {
    return <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </HashRouter>
  }
}

export default connect()(App);
