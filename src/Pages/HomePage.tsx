import React from 'react'
import moment from 'moment'
import { connect, DispatchProp } from 'react-redux'
import { Page, } from '../_components/Page'
import { AppState } from '../_reducers';
import { Form } from 'semantic-ui-react';

type Props = DispatchProp & {
  timeRange: number,
  refresh: number,
}

class HomePage extends React.PureComponent<Props> {

  autoRefreshInterval: number = 0

  componentDidMount() {
    // this.autoRefreshInterval = setInterval(this.refreshData.bind(this), )
  }

  componentWillUnmount() {

  }

  refreshData() {

  }

  render() {
    const { timeRange, refresh } = this.props
    const timeRangeFormat = moment.utc(timeRange).format('hh:mm:ss')
    const refreshFormat = moment.utc(refresh).format('hh:mm:ss')

    return (
      <Page title='Main'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid defaultValue={timeRangeFormat} label='Data for the past (in hours)' type='time' />
            <Form.Input fluid defaultValue={refreshFormat} label='Auto refresh (in seconds)' type='time' />
          </Form.Group>
        </Form>


      </Page>
    )
  }
}

function mapStateToProps(state: AppState) {
  const { settings } = state
  return {
    timeRange: settings.timeRange,
    refresh: settings.refresh,
  }
}

export default connect(mapStateToProps)(HomePage)
