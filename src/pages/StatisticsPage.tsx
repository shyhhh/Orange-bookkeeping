import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { LineChart } from '../components/LineChart'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'

export const StatisticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const items = [
    { date: '2000-01-01', value: 15000 },
    { date: '2000-01-02', value: 25000 },
    { date: '2000-01-31', value: 10000 },
  ].map(item => ({ x: item.date, y: item.value }))
  return (
    <div>
      <Gradient>
        <TopNav title='统计图表' icon={
          <Icon name="back" />}
        />
      </Gradient>
      <TimeRangePicker selected={timeRange} onSelect={setTimeRange} />
      <LineChart className='h-400px' items={items} />
    </div>
  )
}
