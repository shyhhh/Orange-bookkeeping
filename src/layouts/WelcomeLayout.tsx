import { animated, useTransition } from '@react-spring/web'
<<<<<<< HEAD
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
=======
import { ReactNode, useEffect } from 'react'
import { useRef, useState } from 'react'
>>>>>>> f470f9511988fc03283632afa6f0a041a86da517
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { useSwipe } from '../hooks/useSwipe'
import { useLocalStore } from '../stores/useLocalStore'
const linkMap: Record<string, string> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/home',
}

export const WelcomeLayout: React.FC = () => {
  const animating = useRef(false)
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'relative' | 'absolute' }>({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: {
      transform: location.pathname === '/welcome/1'
        ? 'translateX(0%)'
        : 'translateX(100%)'
    },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 1000 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      animating.current = false
      setExtraStyle({ position: 'relative' })
    }
  })
  const main = useRef<HTMLElement>(null)
  const { direction } = useSwipe(main)
<<<<<<< HEAD
=======
  console.log(direction)
>>>>>>> f470f9511988fc03283632afa6f0a041a86da517
  const nav = useNavigate()
  useEffect(() => {
    if (direction === 'left') {
      if (animating.current) { return }
      animating.current = true
      nav(linkMap[location.pathname])
    }
  }, [direction, location.pathname, linkMap])
  const { setHasReadWelcomes } = useLocalStore()
  const onSkip = () => {
    setHasReadWelcomes(true)
<<<<<<< HEAD
    nav('/home')
=======
    nav('/welcome/home')
>>>>>>> f470f9511988fc03283632afa6f0a041a86da517
  }
  return (
    <div className="bg-#5f34bf" h-screen flex flex-col items-stretch pb-16px>
      <span fixed text-white top-16px right-16px text-32px onClick={onSkip}>跳过</span>
      <header shrink-0 text-center pt-64px>
        <img src={logo} w-64px h-69px />
        <h1 text="#D4D4EE" text-32px>橙子记账</h1>
      </header>
      <main shrink-1 grow-1 relative ref={main}>
        {transitions((style, pathname) =>
          <animated.div key={pathname} style={{ ...style, ...extraStyle }} w="100%" h-72vh p-16px flex>
            <div grow-1 bg-white flex justify-center items-center rounded-8px>
              {map.current[pathname]}
            </div>
          </animated.div>
        )}
      </main>
    </div>)
}
