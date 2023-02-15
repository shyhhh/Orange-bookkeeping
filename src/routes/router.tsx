import { createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRouter'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <MainLayout />,
    children: [
      welcomeRoutes
    ]
  },
])
