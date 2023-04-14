import { useNavigate } from 'react-router-dom'
import groovyWalkAnimation from '../assets/json/ComingSongPage.json'
import { WelcomeScreen } from '../components/WelcomeScreen'
const ComingSoonPage: React.FC = () => {
  const nav = useNavigate()
  return (
    <div flex justify-center items-center flex-col gap-y-24px py-48px h-screen px-48px>
      <WelcomeScreen animationData={groovyWalkAnimation} />
      <div text='#333'>敬请期待 ~</div>
      <button h-btn onClick={() => nav(-1)}>返回</button>
    </div>
  )
}

export default ComingSoonPage
