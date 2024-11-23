import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './Context/authcontext';
import { MyProvider } from './context/context';
import AuthRoutes from './routes/authroutes';
import './index.css';
import Navbar from './structure/navbar';
import Footer from './structure/footer';
import "flowbite/dist/flowbite.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <MyProvider>
            <Navbar />
              <AuthRoutes />
            <Footer />
        </MyProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
