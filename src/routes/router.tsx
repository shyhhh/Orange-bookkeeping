import { createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome } from '../components/RedirectToWelcome'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRouter'
export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <RedirectToWelcome />,
    element: <MainLayout />,
    children: [
      welcomeRoutes
    ]
  },
])
