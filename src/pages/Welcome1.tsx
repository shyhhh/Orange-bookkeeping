import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import groovyWalkAnimation from '../assets/json/wel1.json'

export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <Lottie className='w-300px h-300px m-t--50px' animationData={groovyWalkAnimation} loop={true} />
      <h2 text-32px text='#333'>
        会挣钱 <br />
        还会省钱
      </h2>
      <div mt-64px>
        <Link text-32px color=" #ffc400f4" font-bold to="/welcome/2">下一页</Link>
      </div>
    </div>
  )
}
