import React, { ChangeEvent } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Page, } from '../_components/Page'
import { AppState } from '../_reducers';
import { Form, InputOnChangeData } from 'semantic-ui-react';
import { settingActions } from '../_actions/setting.actions';
import { dataActions } from '../_actions/data.actions';

type Props = DispatchProp & {
  timeRange: number,
  refresh: number,
}

class HomePage extends React.PureComponent<Props> {

  autoRefreshInterval: any = 0

  componentDidMount() {
    this.autoRefreshInterval = setInterval(this.refreshData.bind(this), this.props.refresh)
    this.refreshData()
  }

  componentWillUnmount() {
    clearInterval(this.autoRefreshInterval)
  }

  refreshData() {
    const { dispatch, timeRange } = this.props
    const to = Math.floor(Date.now() / 1000)
    const from = to - Math.floor(timeRange / 1000)
    dispatch(dataActions.getSpeed(from, to))
    dispatch(dataActions.getOdo(from, to))
    dispatch(dataActions.getTemp(from, to))
  }

  onChange(e: ChangeEvent, data: InputOnChangeData) {

    const { dispatch } = this.props

    switch (data.name) {

      case 'refresh':
        const value = parseInt(data.value) * 1000
        dispatch(settingActions.setRefresh(value))
        clearInterval(this.autoRefreshInterval)
        this.autoRefreshInterval = setInterval(this.refreshData.bind(this), value)
        break

      case 'timeRange':
          dispatch(settingActions.setTimeRange(parseInt(data.value) * 1000 * 3600))
        break

    }

  }

  render() {
    const { timeRange, refresh } = this.props

    return (
      <Page title='Main'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              name='timeRange'
              onChange={this.onChange.bind(this)}
              defaultValue={timeRange / 3600000}
              label='Data for the past (in hours)'
              type='number'
              min='1'
              max='10' />
            <Form.Input
              fluid
              name='refresh'
              onChange={this.onChange.bind(this)}
              defaultValue={refresh / 1000}
              label='Auto refresh (in seconds)'
              type='number'
              min='1'
              max='60' />
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
