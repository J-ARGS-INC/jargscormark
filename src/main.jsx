import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { router } from './routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { UserProvider } from "./context/user";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserProvider>
      <ConvexProvider client={convex}>
        <RouterProvider router={router} />
      </ConvexProvider>
    </UserProvider>

  </StrictMode>,
)
