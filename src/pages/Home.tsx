import useSWR from 'swr'
import { Link, Navigate } from 'react-router-dom'
import { useAjax } from '../lib/ajax'
import { useTitle } from '../hooks/useTitle'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import groovyWalkAnimation from '../assets/json/home.json'
import { WelcomeScreen } from '../components/WelcomeScreen'
interface Props {
  title?: string
}
const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const { get } = useAjax({ showLoading: true, handleError: false })
  const { data: meData, error: meError } = useSWR('/api/v1/me', async path => {
    const response = await get<Resource<User>>(path)
    return response.data.resource
  })
  const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, async path =>
    (await get<Resources<Item>>(path)).data
  )

  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemsData && !itemsError

  if (isLoadingMe || isLoadingItems) {
    return <div text-center p-16px>加载中...</div>
  }

  if (itemsData?.resources[0]) {
    return <Navigate to="/items" />
  }

  return <div h-100vh>
    <div flex justify-center items-center >
      <WelcomeScreen animationData={groovyWalkAnimation} className="mt-40 mb-10"/>
    </div>
    <div px-16px>
      <Link to="/items/new">
        <button h-btn>开始记账</button>
      </Link>
    </div>
    <AddItemFloatButton />
  </div >
}

export default Home
