import type { ReactNode } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import { useCreateItemStore } from '../stores/useCreateItemStore'
import { Tags } from './ItemsNewPage/Tags'
import { ItemAmount } from './ItemsNewPage/ItemAmount'
import { ItemDate } from './ItemsNewPage/ItemDate'
import s from './ItemsNewPage.module.scss'

export const ItemsNewPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error, setData, setError } = useCreateItemStore()
  const tabItems: { key: Item['kind']; text: string; element?: ReactNode }[] = [
      {
        key: 'expenses', text: '支出', element:
          <Tags kind="expenses" value={data.tag_ids} onChange={(ids) => setData({ tag_ids: ids })} />
      },
      {
        key: 'income', text: '收入', element:
          <Tags kind="income" value={data.tag_ids} onChange={(ids) => setData({ tag_ids: ids })} />
      }
  ]
  const onSubmit = () => {
    window.console.log('你要提交是吧')
  }
  return (
    <div className={s.wrapper} h-screen flex flex-col onSubmit={onSubmit}>
      <Gradient className="grow-0 shrink-0">
        <TopNav title='记一笔' icon={
          <Icon name="back" className='w-24px h-24px' />} />
      </Gradient>
      <Tabs tabItems={tabItems} value={data.kind!}
        onChange={(tabItem) => { setData({ kind: tabItem }) }}
        className="text-center grow-1 shrink-1 overflow-hidden"
        classPrefix='itemsNewPage'
      />
      <div>{JSON.stringify(data)}</div>
      <ItemAmount className="grow-0 shrink-0" itemDate={
        <ItemDate value={data.happen_at} onChange={(happen_at) => setData({ happen_at })} />
      } value={data.amount} onChange={(amount) => setData({ amount })} onSubmit={ onSubmit} />
    </div>
  )
}
