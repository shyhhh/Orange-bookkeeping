import useSWR from 'swr'
import { Navigate } from 'react-router-dom'
import { ajax } from '../lib/ajax'
import p from '../assets/images/pig.svg'
import { Loading } from '../components/Loading'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
export const Home: React.FC = () => {
  const { data: meData, error: meError } = useSWR('/api/v1/me', async path =>
    (await ajax.get<Resource<User>>(path)).data.resource
  )
  const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, async path =>
    (await ajax.get<Resources<Item>>(path)).data
  )

  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemsData && !itemsError

  if (isLoadingMe || isLoadingItems) {
    return <Loading className="h-screen" />
  }

  if (itemsData?.resources[0]) {
    return <Navigate to="/items" />
  }
  return <div>
    <div flex justify-center items-center>
      <img mt-20vh mb-20vh width="128" height="130" src={p} />
    </div>
    <div px-16px>
    <button h-btn>开始记账</button>
    </div>
    <AddItemFloatButton />
  </div>
}
