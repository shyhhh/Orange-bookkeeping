import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const RedirectToWelcome: React.FC = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/welcome/1')
  }, [])
  return null
}
