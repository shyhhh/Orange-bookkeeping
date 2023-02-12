import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink, Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>404</div>,
    element: <Outlet/>,
    children: [
      { index: true, element: <div>空</div>, },
      {
        path: 'welcome',
        element: <Outlet />,
        children: [
          { path: '1', element: <div>1<NavLink to='/welcome/2'>下一页</NavLink></div> },
          { path: '2', element: <div>2<NavLink to='/welcome/3'>下一页</NavLink></div> },
          { path: '3', element: <div>3<Navigate to='/welcome/9'/></div> },
          { path: '4', element: <div>4</div> },
          { path: '9', element: <div>9</div> },
        ]
      }
    ],
  },
])
const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
