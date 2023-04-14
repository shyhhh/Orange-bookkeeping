import { Link } from 'react-router-dom'
import groovyWalkAnimation from '../assets/json/wel1.json'
import { WelcomeScreen } from '../components/WelcomeScreen'

const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <WelcomeScreen animationData={groovyWalkAnimation} />
      <h2 text-32px text='#333'>
        会挣钱 <br />
        还会省钱
      </h2>
      <div mt-64px>
        <Link text-32px color="#f3f3f3" font-bold to="/welcome/2">下一页</Link>
      </div>
    </div>
  )
}

export default Welcome1
