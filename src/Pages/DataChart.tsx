import './DataChart.less'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

type Props = {
  data: Array<any>,
}

export default class DataChart extends React.PureComponent<Props> {

  render() {

    const { data } = this.props

    return (
      <div className='DataChart'>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type='monotone' dataKey='value' stroke='#8884d8' dot={false} />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
