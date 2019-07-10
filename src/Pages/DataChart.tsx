import './DataChart.less'
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

type Props = {

}

export default class DataChart extends React.PureComponent<Props> {

  data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]

  render() {
    return (
      <div className='DataChart'>
        <ResponsiveContainer>
          <LineChart data={this.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type='monotone' dataKey='uv' stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
