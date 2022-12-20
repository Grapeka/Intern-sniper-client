import FormHeader from '../../components/FormHeader';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/authProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const requestBody = {
      email,
      password,
    };

    fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        console.log(res.ok);
        if (res.ok) {
          res.json().then((data) => {
            context?.setToken(data.token);
          });
          navigate('/');
        }
        res.json().then((data) => setError(data.message));
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(requestBody);
  }

  return (
    <div className="login-container">
      <div className="leftside background">
        <p className="logo">Lorem</p>
        <p className="major-phase">Start your journey with us.</p>
        <p className="minor-phase">
          Discover the world's best community of freelancers and business
          owners.
        </p>
      </div>
      <div className="rightside">
        <form onSubmit={onSubmit} className="login-form">
          <FormHeader title="Login">
            <p>
              Don't have an account?{' '}
              <Link
                to="/signup"
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                Register
              </Link>
            </p>
          </FormHeader>
          <FormInput
            setRef={setEmail}
            title="Email"
            description="Email"
            placeholder="user01@example.com"
            variant="outlined"
            type="email"
            required={true}
          />
          <FormInput
            setRef={setPassword}
            title="Password"
            minLength={8}
            description="Password"
            variant="outlined"
            type="password"
            required={true}
          />
          <p className="error-message">{error}</p>
          <FormButton title="Log in" />
        </form>
      </div>
    </div>
  );
}

export default Login;
