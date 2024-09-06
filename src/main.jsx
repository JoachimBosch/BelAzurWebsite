import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './context/authcontext'
import { MyProvider } from './context/context'
import AuthRoutes from './routes/authroutes'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <MyProvider>
            {/* <Navbar /> */}
              <AuthRoutes />
            {/* <Footer /> */}
        </MyProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
