import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import { useLocalStore } from '../stores/useLocalStore'
import groovyWalkAnimation from '../assets/json/wel4.json'

export const Welcome4: React.FC = () => {
  const { setHasReadWelcomes } = useLocalStore()
  const nav = useNavigate()
  const onSkip = () => {
    setHasReadWelcomes(true)
    nav('/home')
  }
  return (
    <div text-center>
      <Lottie className='w-300px h-300px m-t--50px' animationData={groovyWalkAnimation} loop={true} />
      <h2 text-32px text='#333'>
        云备份 <br />
        再也不怕数据丢失
      </h2>
      <div mt-64px>
        <span text-32px color="#FFC200" font-bold onClick={onSkip}>开启应用</span>
      </div>
    </div>
  )
}
