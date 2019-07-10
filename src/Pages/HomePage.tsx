import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Page, } from '../_components/Page'
import { AppState } from '../_reducers';

type Props = DispatchProp & {

}

class HomePage extends React.PureComponent<Props> {

  render() {
    return (
      <Page title='Main'>
        Home Page Content
      </Page>
    )
  }
}

function mapStateToProps(state: AppState) {
  return { }
}

export default connect(mapStateToProps)(HomePage)
