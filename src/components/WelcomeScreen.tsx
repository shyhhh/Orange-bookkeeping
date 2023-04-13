import c from 'classnames'
import React from 'react'
import Lottie from 'lottie-react'

interface Props {
  animationData: object
  className?: string
}

export const WelcomeScreen: React.FC<Props> = (props) => {
  const { className, animationData } = props
  return (
    <Lottie className={c(className, 'w-300px', 'h-300px', 'm-t--50px')} animationData={animationData} loop={true} />
  )
}
