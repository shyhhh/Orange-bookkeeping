import React from 'react'
import Lottie from 'lottie-react'

interface Props {
  animationData: object
}

export const WelcomeScreen: React.FC<Props> = (props) => {
  const { animationData } = props
  return (
    <Lottie className="w-300px h-300px m-t--50px" animationData={animationData} loop={true} />
  )
}
