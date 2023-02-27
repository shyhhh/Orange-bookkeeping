import s from './Tabs.module.scss'
type Props<T> = {
  tabItems: {
    key: T
    text: string
  }[]
  value: T
  onChange: (key: T) => void
  className: string
}
export const Tabs = <T extends string>(props: Props<T>) => {
  const { tabItems, value, onChange, className } = props
  return (
    <ol className={className} flex text-white children-px-24px children-py-12px>
      {tabItems.map(item => <li key={item.key} className={item.key === value ? s.selected : ''}
        onClick={() => onChange(item.key)}>
        {item.text}
      </li>)}
    </ol>
  )
}
