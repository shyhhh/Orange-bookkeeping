import type { AxiosError } from 'axios'
import { Outlet, createHashRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Root } from '../components/Root'
import { ErrorEmptyData, ErrorUnauthorized } from '../errors'
import { ItemsNewPage } from '../pages/ItemsNewPage'
import { ItemsPage } from '../pages/ItemsPage'
import { SignInPage } from '../pages/SignInPage'
import { TagsEditPage } from '../pages/TagsEditPage'
import { TagsNewPage } from '../pages/TagsNewPage'
import { ErrorPage } from '../pages/ErrorPage'
import { ajax } from '../lib/ajax'
import { Loading } from '../components/Loading'

const StatisticsPage = lazy(() => import('../pages/StatisticsPage'))
const WelcomeLayout = lazy(() => import('../layouts/WelcomeLayout'))
const ComingSoonPage = lazy(() => import('../pages/ComingSoonPage'))
const Home = lazy(() => import('../pages/Home'))
const Welcome1 = lazy(() => import('../pages/Welcome1'))
const Welcome2 = lazy(() => import('../pages/Welcome2'))
const Welcome3 = lazy(() => import('../pages/Welcome3'))
const Welcome4 = lazy(() => import('../pages/Welcome4'))

export const router = createHashRouter([
  { path: '/', element: <Root />, },
  { path: '/home', element: <Suspense fallback=''><Home /></Suspense> },
  {
    path: '/welcome',
    element: <Suspense fallback={<Loading className='h-screen' />}><WelcomeLayout /></Suspense>,
    children: [
      { path: '1', element: <Suspense fallback={<Loading className='h-screen' />}><Welcome1 /></Suspense> },
      { path: '2', element: <Suspense fallback={<Loading className='h-screen' />}><Welcome2 /></Suspense> },
      { path: '3', element: <Suspense fallback={<Loading className='h-screen' />}><Welcome3 /></Suspense> },
      { path: '4', element: <Suspense fallback={<Loading className='h-screen' />}><Welcome4 /></Suspense> },
    ]
  },
  { path: '/sign_in', element: <SignInPage /> },
  {
    // 放在这里的路由全部都需要登录
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    loader: async () => {
      return await ajax.get<Resource<User>>('/api/v1/me').catch(e => {
        if (e.response?.status === 401) { throw new ErrorUnauthorized() }
        throw e
      })
    },
    children: [
      {
        path: '/items',
        element: <ItemsPage />,
        errorElement: <ErrorPage />,
        loader: async () => {
          const onError = (error: AxiosError) => {
            if (error.response?.status === 401) { throw new ErrorUnauthorized() }
            throw error
          }
          const response = await ajax.get<Resources<Item>>('/api/v1/items?page=1').catch(onError)
          if (response.data.resources.length > 0) {
            return response.data
          } else {
            throw new ErrorEmptyData()
          }
        }
      },
      { path: '/items/new', element: <ItemsNewPage />, },
      { path: '/tags/new', element: <TagsNewPage /> },
      { path: '/tags/:id', element: <TagsEditPage /> },
      { path: '/sign_in', element: <SignInPage /> },
      { path: '/statistics', element: <Suspense fallback={<Loading className='h-screen' />}><StatisticsPage /></Suspense> },
      { path: '/export', element: <Suspense fallback={<Loading className='h-screen' />}><ComingSoonPage /></Suspense> },
      { path: '/noty', element: <Suspense fallback={<Loading className='h-screen' />}><ComingSoonPage /></Suspense> },
    ]
  },
])
