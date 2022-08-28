import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './feature/auth/Login/Login';
import Expert from './pages/Expert/Expert';
import EmailLogin from './feature/auth/EmailLogin/EmailLogin';
import ForgotPassword from './feature/auth/ForgotPassword/ForgotPassword';
import ConfirmCode from './feature/auth/ConfrimCode/ConfirmCode';
import Signup from './feature/auth/Signup/Signup';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} replace />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/experts' element={<Expert />} />
        <Route path='/email-login' element={<EmailLogin />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/confirm-code' element={<ConfirmCode />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
