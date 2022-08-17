import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Experts from './pages/Experts';
import Login from './feature/auth/Login/Login';
import EmailLogin from './feature/auth/EmailLogin/EmailLogin';
import ForgotPassword from './feature/auth/ForgotPassword/ForgotPassword';
import ConfirmCode from './feature/auth/ConfrimCode/ConfirmCode';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experts' element={<Experts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-login' element={<EmailLogin />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/confirm-code' element={<ConfirmCode />} />
      </Routes>
    </div>
  );
}

export default App;
