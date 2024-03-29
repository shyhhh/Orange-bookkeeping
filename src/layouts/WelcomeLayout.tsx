import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Pathname } from 'react-router-dom'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { useSwipe } from '../hooks/useSwipe'
import { useLocalStore } from '../stores/useLocalStore'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
const nextLinkMap: Record<Pathname, Pathname> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/home',
}

const prevLinkMap: Record<Pathname, Pathname> = {
  '/welcome/2': '/welcome/1',
  '/welcome/3': '/welcome/2',
  '/welcome/4': '/welcome/3'
}

const WelcomeLayout: React.FC = memo(() => {
  const animating = useRef(false)
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'relative' | 'absolute' }>({ position: 'relative' })

  const main = useRef<HTMLElement>(null)
  const { direction } = useSwipe(main)
  const transitionRef = useRef({})
  const transitionConfig = useMemo(() => {
    const translateX = direction === 'right' ? -100 : 100
    const first = location.pathname === '/welcome/1' && direction === ''
    transitionRef.current = {
      from: { opacity: first ? 1 : 0, transform: `translateX(${first ? 0 : translateX}%)` },
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: { opacity: 0, transform: `translateX(${-translateX / 2}%)`, },
      config: { duration: 350 },
      onStart: () => setExtraStyle({ position: 'absolute' }),
      onRest: () => {
        animating.current = false
        setExtraStyle({ position: 'relative' })
      }
    }
    return transitionRef.current
  }, [direction, location.pathname])
  const transitions = useTransition(location.pathname, { ...transitionConfig })
  const nav = useNavigate()
  useEffect(() => {
    if (direction === 'left') {
      if (animating.current) { return }
      animating.current = true
      nav(nextLinkMap[location.pathname], { replace: true })
    }
    if (direction === 'right') {
      if (animating.current) { return }
      if (location.pathname === '/welcome/1') { return }
      animating.current = true
      nav(prevLinkMap[location.pathname], { replace: true })
    }
  }, [direction, location.pathname, nextLinkMap])
  const { setHasReadWelcomes } = useLocalStore()
  const onSkip = useCallback(() => {
    setHasReadWelcomes(true)
    nav('/home')
  }, [setHasReadWelcomes, nav])
  return (
    <Gradient>
      <div h-screen flex flex-col items-stretch>
        <header shrink-0 mb-32px >
          <p align-revert flex justify-end p-32px>
            <span fixed top-16px right-16px text-24px onClick={onSkip}>跳过</span>
          </p>
          <div text-center>
            <Icon name='logo' className='w-40px h-40px'/>
            <h1 text='#f3f3f3' >橙子记账</h1>
          </div>
        </header>
        <main shrink-1 grow-1 relative w-full overflow-hidden ref={main}>
          {transitions((style, pathName) =>
            <animated.div key={pathName} style={{ ...style, ...extraStyle }}
              flex justify-center items-center w="100%" h='100%'>
              {map.current[pathName]}
            </animated.div>
          )}
        </main>
      </div>
    </Gradient >)
})

export default WelcomeLayout
