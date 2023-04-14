import { Link } from 'react-router-dom'
import groovyWalkAnimation from '../assets/json/wel3.json'
import { WelcomeScreen } from '../components/WelcomeScreen'

export const Welcome3: React.FC = () => {
  return (
    <div text-center>
      <WelcomeScreen animationData={groovyWalkAnimation} />
      <h2 text-32px text='#333'>
        数据可视化 <br />
        收支一目了然
      </h2>
    </div>
  )
}
