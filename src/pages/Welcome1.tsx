import { Link } from 'react-router-dom'
import groovyWalkAnimation from '../assets/json/wel1.json'
import { WelcomeScreen } from '../components/WelcomeScreen'

export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <WelcomeScreen animationData={groovyWalkAnimation} />
      <h2 text-32px text='#333'>
        会挣钱 <br />
        还会省钱
      </h2>
    </div>
  )
}
