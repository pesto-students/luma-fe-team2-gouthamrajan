import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './feature/auth/Login/Login';
import Expert from './pages/Expert/Expert';
import EmailLogin from './feature/auth/EmailLogin/EmailLogin';
import ForgotPassword from './feature/auth/ForgotPassword/ForgotPassword';
import ResetPassword from './feature/auth/ResetPassword/ResetPassword';
import Signup from './feature/auth/Signup/Signup';
import NotFound from './pages/NotFound';
import PaymentPage from './feature/payment/PaymentPage/PaymentPage';
import ExpertDashboard from './pages/ExpertDashboard/ExpertDashboard';
import { useAuth } from './context/AuthContext';

function App() {
  const { isExpert, currentUser } = useAuth();

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} replace />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-login' element={<EmailLogin />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        {/* user routes */}
        {!isExpert && currentUser && (
          <>
            <Route path='/experts' element={<Expert />} />
            <Route path='/payment' element={<PaymentPage />} />
          </>
        )}

        {/* expert routes */}
        {isExpert && (
          <>
            <Route path='/expert-dashboard' element={<ExpertDashboard />} />
          </>
        )}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
