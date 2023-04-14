import { useNavigate } from 'react-router-dom'
import { useLocalStore } from '../stores/useLocalStore'
import groovyWalkAnimation from '../assets/json/wel4.json'
import { WelcomeScreen } from '../components/WelcomeScreen'

export const Welcome4: React.FC = () => {
  const { setHasReadWelcomes } = useLocalStore()
  const nav = useNavigate()
  const onSkip = () => {
    setHasReadWelcomes(true)
    nav('/home')
  }
  return (
    <div text-center>
      <WelcomeScreen animationData={groovyWalkAnimation} />
      <h2 text-32px text='#333'>
        云备份 <br />
        再也不怕数据丢失
      </h2>
    </div>
  )
}
