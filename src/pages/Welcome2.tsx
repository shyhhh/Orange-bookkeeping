import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import groovyWalkAnimation from '../assets/json/wel2.json'
export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <Lottie className='w-300px h-300px m-t--50px' animationData={groovyWalkAnimation} loop={true} />
      <h2 text-32px text='#333'>
        每日提醒 <br />
        不会遗漏每一笔账单
      </h2>
      <div mt-64px>
        <Link text-32px color="#FFC200" font-bold to="/welcome/3">下一页</Link>
      </div>
    </div>
  )
}
