import { createHashRouter, Navigate } from 'react-router-dom'
import App from '@/view/App'

export const mainRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
])
