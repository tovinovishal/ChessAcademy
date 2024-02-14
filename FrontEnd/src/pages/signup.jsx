import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/sin.css';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [mobileNumberError, setMobileNumberError] = useState('');

  // const mobileNumberPattern = /^[0-9]{10}$/;

  const onSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long.');
      return;
    }

    // if (!mobileNumberPattern.test(mobileNumber)) {
    //   setMobileNumberError('Invalid mobile number');
      
    // }

    if (name.trim() === '') {
      setNameError('Name is required');
      
    }

    e.preventDefault();

      const form={
        email:email,
        password:password,
        name:name,
        mobileNumber:mobileNumber
      };

      signUp(form)
            .then((res) => {
                
                sessionStorage.setItem('token', res.data.token);
                setEmail("");
                setPassword("");
                setMobileNumber("");
                setName("");
                navigate('/login');
            })
            .catch((err) => {
                setEmail("");
                setPassword("");
                console.log(err);
               
            });

    

    
  };

  return (
    <div className='parent_container'>
      <div className='child_container'>
        <div className='c2'></div>
        <div className="new-wrapper__signup">
          <div className="new-form">
            <div className="new-heading">CREATE AN ACCOUNT</div>
            <form>
              <div>
                <label htmlFor="newName">Name </label>
                <input
                  type="text"
                  id="newName"
                  placeholder="Enter your name"
                  // value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="new-error">{nameError}</p>}
              </div>
              <br />
              <div >
                <label htmlFor="newEmail">E-Mail </label>
                <input
                  type="text"
                  id="newEmail"
                  placeholder="Enter your email"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="new-error">{emailError}</p>}
              </div>
              <br />
              <div>
                <label htmlFor="newPassword">Password </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter your password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="new-error">{passwordError}</p>}
              </div>
              <br />
              {/* <div>
                <label htmlFor="newMobileNumber">Mobile Number </label>
                <input
                  type="text"
                  id="newMobileNumber"
                  placeholder="Enter your mobile number"
                  // value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                {mobileNumberError && <p className="new-error">{mobileNumberError}</p>}
              </div>
              <br /> */}
              <button className='sbButton' type="submit" onClick={onSubmit}>
                Submit
              </button>
              <h2 style={{ textAlign: 'center', fontSize: '15px' }}>OR</h2>
            </form>
            <p>
              Have an account ? <Link to="/login"> Login </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
