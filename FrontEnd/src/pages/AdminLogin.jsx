import { useState } from 'react';
import '../assets/css/AdminLogin.css';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const preventRefresh = (e) => {
    e.preventDefault();
    

    // Perform form validation before submitting
    if (validateForm()) {
      // Your form submission logic here, e.g., redirect to "/home"
      console.log('Form submitted successfully', { email, password});
      navigate('/sidebar');
    }
    
  };

  const validateForm = () => {
    let isValid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation (add more conditions as needed)
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
    
  };

  return (
    <div className='pa_container'>
    <div className='ch_container'>
    <div className='c11'></div>
    <div className="wrapper__adminlogin">
        <div className="forms">
          <div className="heading1">LOGIN</div>
          <form>
            <div className='loginField1'>
              <label htmlFor="e-mail">E-Mail</label>
              <input
                type="email"
                id="e-mail"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div><br/>
            <div className='loginField1'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div><br/>
            <button className='sbpButton' type="submit" onClick={preventRefresh}>
              Submit
            </button>
          </form>
        </div>
      </div> 
      </div>
      </div>
   
  );
}
