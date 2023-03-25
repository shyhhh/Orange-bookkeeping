import type { ReactNode } from 'react'
import cs from 'classnames'
import s from './Tabs.module.scss'
type Props<T> = {
  tabItems: {
    key: T
    text: string
    element?: ReactNode
  }[]
  value: T
  onChange: (key: T) => void
  className?: string
  classPrefix?: string
}
export const Tabs = <T extends string>(props: Props<T>) => {
  const { tabItems, value, onChange, className, classPrefix } = props
  return (
    <div className={cs(className, classPrefix)} flex flex-col>
      <ol flex text-white children-px-24px children-py-12px bg="[rgb(143,76,215)]"
        grow-0 shrink-0 className={classPrefix ? `${classPrefix}-menu` : ''}>
        {tabItems.map(item =>
          <li key={item.key} className={
            cs(
              item.key === value ? s.selected : '',
              classPrefix ? `${classPrefix}-menu-item` : ''
            )
          }
            onClick={() => onChange(item.key)}>
            {item.text}
          </li>)}
      </ol>
      <div grow-1 shrink-1 overflow-auto className={classPrefix ? `${classPrefix}-pane` : ''}>
        {tabItems.filter(item => item.key === value)[0].element}
        {/* DOM diff 算法 */}
        {/* 组件名是否一致 Tags => Tags A=>B */}
        {/* 如果一致就不删旧的组件，而是更新其属性 */}
      </div>
    </div>
  )
}
