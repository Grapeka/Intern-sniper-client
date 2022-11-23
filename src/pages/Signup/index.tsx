import React, { useState } from "react";
import FormHeader from "../../components/FormHeader";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import RadioCard from "../../components/RadioCard";
import { FormLabel } from "@mui/material";
import { Link } from 'react-router-dom'
import './Signup.css'
import useRefAsState from "../../hooks/useRefAsState";
import StudentForm from "../../components/StudentForm";
import CompanyForm from "../../components/CompanyForm";

interface SignupProps {
  setSelectedRole: (input: string) => void
}

function SignupAs(props: SignupProps) {
  return (
    <div className="signup-as-container">
      <FormLabel>Who are you?</FormLabel>
      <div className="radio-container">
        <RadioCard setSelectedRole={props.setSelectedRole} title="Student" />
        <RadioCard setSelectedRole={props.setSelectedRole} title="Company" />
      </div>
    </div>
  )
}

function Login() {
  const [selectedRole, setSelectedRole] = useRefAsState()
  const [email, setEmail] = useRefAsState()
  const [password, setPassword] = useRefAsState()
  const [confirmPassword, setConfirmPassword] = useRefAsState()
  const [step, setStep] = useState(1)
  const [error, setError] = useState()

  async function preSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    const requestBody = {
      email: email.current,
      password: password.current,
      confirmPassword: confirmPassword.current
    }

    const res = await fetch(import.meta.env.VITE_BACKEND_URL + '/auth/register/pre', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    if(! res.ok) {
      return res.json()
        .then(res => setError(res.message))
    }
    setStep(2)
  }


  function FirstStep() {
    return (
      <form className="register-form" onSubmit={preSubmit}>
        <SignupAs setSelectedRole={setSelectedRole} />
        <FormInput setRef={setEmail} title="Email" placeholder="Enter your email here" variant="outlined" type="email" required={true} />
        <div className="password-field">
          <FormInput setRef={setPassword} title="Password" placeholder="Must at least 8 characters" minLength={8} variant="outlined" type="password" required={true} />
          <FormInput setRef={setConfirmPassword} title="Confirm Password" placeholder="Must at least 8 characters" minLength={8} variant="outlined" type="password" required={true} />
        </div>
        <p className="error-message">{error}</p>
        <FormButton title="Sign up" />
      </form>
    )
  }

  function SecondStep() {
    return (
      <>
        {
          selectedRole.current == 'Student' ?
            <StudentForm email={email.current} password={password.current} confirmPassword={confirmPassword.current} /> :
            <CompanyForm email={email.current} password={password.current} confirmPassword={confirmPassword.current} />
        }
      </>
    )
  }

  return (
    <div className="register-container">
      <div className="leftside background">
        <p className="logo">Lorem</p>
        <p className="major-phase">Start your journey with us.</p>
        <p className="minor-phase">Discover the world's best community of freelancers and business owners.</p>
        <p className="suggest-card">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ea autem, quo accusantium rerum praesentium aperiam. Error similique, maiores, tenetur ipsa facere minima eligendi sequi atque possimus</p>
      </div>
      <div className="rightside">
        <div className="register-form-container">
          <FormHeader title="Sign up" >
            <div className="children-container">
              <p>Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>Login</Link></p>
              {step == 2 &&
                <div className="back-logo" onClick={() => setStep(1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                  </svg>
                  BACK
                </div>
              }
            </div>
          </FormHeader>
          {step == 1 ?
          <FirstStep /> :
          <SecondStep />
          }
        </div>
      </div>
    </div>
  );
}


export default Login;