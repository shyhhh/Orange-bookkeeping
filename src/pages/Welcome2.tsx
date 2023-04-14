import { Link } from 'react-router-dom'
import groovyWalkAnimation from '../assets/json/wel2.json'
import { WelcomeScreen } from '../components/WelcomeScreen'

export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <WelcomeScreen animationData={groovyWalkAnimation} />
      <h2 text-32px text='#333'>
        每日提醒 <br />
        不会遗漏每一笔账单
      </h2>
    </div>
  )
}
