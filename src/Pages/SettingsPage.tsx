import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Page, } from '../_components/Page'
import { AppState } from '../_reducers';

type Props = DispatchProp & {

}

class SettingsPage extends React.PureComponent<Props> {

  render() {
    return (
      <Page title='Settings'>
        Settings Page Content
      </Page>
    )
  }
}

function mapStateToProps(state: AppState) {
  return { }
}

export default connect(mapStateToProps)(SettingsPage)
