import { createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRouter'

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <div>home</div>
  },
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <MainLayout />,
    children: [
      welcomeRoutes
    ]
  },
])
