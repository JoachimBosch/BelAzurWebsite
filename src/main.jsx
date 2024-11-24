import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyProvider } from './context/context';
import AuthRoutes from './routes/authroutes';
import './index.css';
import Navbar from './structure/navbar';
import Footer from './structure/footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <MyProvider>
            <Navbar />
              <AuthRoutes />
            <Footer />
        </MyProvider>
    </Router>
  </StrictMode>,
)
