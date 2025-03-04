import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { router } from './routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from "./context/user";


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>

  </StrictMode>,
)
