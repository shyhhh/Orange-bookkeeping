import useSWRInfinite from 'swr/infinite'
import { ajax } from '../../lib/ajax'

const getKey = (pageIndex: number, prev: Resources<Item>) => {
  if (prev) {
    const sendCount = (prev.pager.page - 1) * prev.pager.per_page + prev.resources.length
    const count = prev.pager.count
    if (sendCount >= count) { return null }
  }
  return `/api/v1/items?page=${pageIndex + 1}`
}
export const ItemsList: React.FC = () => {
  const { data, error, size, setSize } = useSWRInfinite(
    getKey, async path => (await ajax.get<Resources<Item>>(path)).data
  )
  const onLoadMore = () => {
    setSize(size + 1)
  }
  if (!data) {
    return <span>还没搞定</span>
  } else {
    const last = data[data.length - 1]
    const { page, per_page, count } = last.pager
    const hasMore = (page - 1) * per_page + last.resources.length < count
    return (
      <>
        <ol >
          {data.map(({ resources }) =>
            resources.map(item =>
              <li key={item.id} grid grid-cols="[auto_1fr_auto]" grid-rows-2 px-16px py-8px gap-x-12px
                border-b-1 b="#EEE">
                <div row-start-1 col-start-1 row-end-3 col-end-2 text-24px w-48px h-48px
                  bg="#D8D8D8" rounded="50%" flex justify-center items-center>
                  🦁️
                </div>
                <div row-start-1 col-start-2 row-end-2 col-end-3>
                  旅行
                </div>
                <div row-start-2 col-start-2 row-end-3 col-end-4 text="#999999">
                  2011年1月1日
                </div>
                <div row-start-1 col-start-3 row-end-2 col-end-4 text="#53A867">
                  ¥{item.amount / 100}
                </div>
              </li>
            )
          )}
        </ol>
        {hasMore
          && <div p-16px text-center><button h-btn onClick={onLoadMore}>加载更多</button></div>
          || <div p-16px text-center text-gray-500>没有更多数据了</div>}
      </>
    )
  }
}