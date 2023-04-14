import { animated, useTransition } from '@react-spring/web'
import { ReactNode, useCallback, useMemo ,memo} from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link, Pathname, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { useSwipe } from '../hooks/useSwipe'
import { useLocalStore } from '../stores/useLocalStore'
import { Gradient } from '../components/Gradient'
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

export const WelcomeLayout: React.FC = memo(() => {
  const animating = useRef(false)
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'relative' | 'absolute' }>({ position: 'relative' })

  const main = useRef<HTMLElement>(null)
  const { direction } = useSwipe(main)
  const transitionConfig = useMemo(() => {
    const translateX = direction === 'right' ? -100 : 100
    const first = location.pathname === '/welcome/1' && direction === ''
    return {
      from: { opacity: first ? 1 : 0, transform: `translateX(${first ? 0 : translateX}%)` },
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: { opacity: 0, transform: `translateX(${-translateX}%)`, },
      config: { duration: 350 },
      onStart: () => setExtraStyle({ position: 'absolute' }),
      onRest: () => {
        animating.current = false
        setExtraStyle({ position: 'relative' })
      }
    }
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
            <span fixed top-16px right-16px text-16px onClick={onSkip}>跳过</span>
          </p>
          <div text-center>
            <img src={logo} h-40px />
            <h1 text='#f3f3f3' >橙子记账</h1>
          </div>
        </header>
        <main shrink-1 grow-1 relative ref={main}>
          {transitions((style, pathName) =>
            <animated.div key={pathName} style={{ ...style, ...extraStyle }}
              flex justify-center items-center w="100%" h-56vh>
              {map.current[pathName]}
            </animated.div>
          )}
        </main>
        <footer h="1/7" shrink-0 text-center text-24px>
          {
            nextLinkMap[location.pathname] !== '/home'
              ? <Link to={nextLinkMap[location.pathname]} replace>下一页</Link>
              : <Link to={nextLinkMap[location.pathname]} replace>开启应用</Link>
          }
        </footer>
      </div>
    </Gradient >)
})
