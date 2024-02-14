import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import { signIn } from '../services/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError,setErrorMessage] = useState('');
  const [passwordError] = useState('');
  const navigate = useNavigate();

  const preventRefresh = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    e.preventDefault();

      const form={
        email:email,
        password:password
      };

      signIn(form)
            .then((res) => {
                
                sessionStorage.setItem('token', res.data.token);
                setEmail("");
                setPassword("");
                navigate('/home');
            })
            .catch((err) => {
                setEmail("");
                setPassword("");
                console.log(err);
               
            });
    }
  

   
  

  

  return (
    <div className='p_container'>
    <div className='c_container'>
    <div className='c1'></div>
    <div className="wrapper__login">
        <div className="form">
          <div className="heading">LOGIN</div>
          <form>
            <div className='loginField'>
              <label htmlFor="e-mail">E-Mail</label>
              <input
                type="email"
                id="e-mail"
                placeholder="Enter your email"
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className='loginField'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <button className='sbButton' type="submit" onClick={preventRefresh}>
              Submit
            </button>
            <Link to="/adminlogin" style={{textAlign:"center"}}>Admins Login Here!</Link>
          </form>
          <p>
            Don`t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div> 
      </div>
      </div>
   
  );
  }


