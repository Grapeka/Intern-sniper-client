import { useState } from "react";
import FormHeader from "../../components/FormHeader";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import RadioCard from "../../components/RadioCard";
import { FormLabel } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import useRefAsState from "../../hooks/useRefAsState";

interface SignupProps {
  setSelectedRole: React.Dispatch<React.SetStateAction<"" | "Student" | "Company">>
}

interface MediaLink {
  type: string,
  url: string
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
  const [selectedRole, setSelectedRole] = useState<'' | 'Student' | 'Company'>('')
  const [email, setEmail] = useRefAsState()
  const [password, setPassword] = useRefAsState()
  const [confirmPassword, setConfirmPassword] = useRefAsState()
  const [firstName, setFirstName] = useRefAsState()
  const [lastName, setLastName] = useRefAsState()
  const [university, setUniversity] = useRefAsState()
  const [studyingYear, setStudyingYear] = useRefAsState()
  const [interestedField, setInterestedField] = useRefAsState()
  const [companyName, setCompanyName] = useRefAsState()
  const [phoneNumber, setPhoneNumber] = useRefAsState()
  const [location, setLocation] = useRefAsState()
  const [linkin, setLinkin] = useRefAsState()
  const [github, setGithub] = useRefAsState()
  const [facebook, setFacebook] = useRefAsState()
  const navigate = useNavigate()

  function MediaLinks() {
    return (
      <>
        <FormInput setRef={setLinkin} title="Linkedin" placeholder="e.g. https://gr.linkedin.com/in/example" variant="outlined" type="text" ></FormInput>
        <FormInput setRef={setGithub} title="Github" placeholder="e.g. https://github.com/example" variant="outlined" type="text" ></FormInput>
        <FormInput setRef={setFacebook} title="Facebook" placeholder="e.g. https://www.facebook.com/example" variant="outlined" type="text" ></FormInput>
      </>
    )
  }

  function StudentForm() {
    return (
      <>
        <div className="student-form-name">
          <FormInput setRef={setFirstName} title="First Name" placeholder="Enter your first name..." variant="outlined" type="text" required={true}></FormInput>
          <FormInput setRef={setLastName} title="Last Name" placeholder="Enter your last name..." variant="outlined" type="text" required={true}></FormInput>
        </div>
        <div className="student-form-university">
          <FormInput setRef={setUniversity} title="University" placeholder="Enter your university here. e.g. Kasetsart, ..." variant="outlined" type="text" required={true}></FormInput>
          <FormInput setRef={setStudyingYear} title="Studying Year" widthSize="width-small" variant="outlined" placeholder="1-12" type="number" min={1} max={12} required={true}></FormInput>
        </div>
        <FormInput setRef={setInterestedField} title="Interest Fields" placeholder="e.g. software engineer, data science, photographer" variant="outlined" type="text" />
        <MediaLinks />
      </>
    )
  }

  function CompanyForm() {
    return (
      <>
        <div className="company-form-info">
          <FormInput setRef={setCompanyName} title="Company Name" required={true} placeholder="Enter your company name here" variant="outlined" type="text"></FormInput>
          <FormInput setRef={setPhoneNumber} title="Phone" required={true} placeholder="Enter your phone number here" variant="outlined" type="text"></FormInput>
        </div>
        <FormInput setRef={setLocation} title="Location" required={true} placeholder="e.g. Bangkok, Thailand" variant="outlined" type="text" />
        <MediaLinks />
      </>
    )
  }

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    
    switch (selectedRole) {
      case 'Student': {
        const requestBody = {
          email: email.current,
          password: password.current,
          confirmPassword: confirmPassword.current,
          firstName: firstName.current,
          lastName: lastName.current,
          university: university.current,
          studyingYear: studyingYear.current,
          interestedField: interestedField.current.split(','),
          mediaLinks: [] as MediaLink[]
        }
        if(linkin.current) requestBody.mediaLinks.push({ "type": "Linkedin", "url": linkin.current })
        if(github.current) requestBody.mediaLinks.push({ "type": "Github", "url": github.current })
        if(facebook.current) requestBody.mediaLinks.push({ "type": "Facebook", "url": facebook.current })
        console.log(JSON.stringify(requestBody))

        fetch('http://localhost:8000/auth/register/student', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(requestBody)
        })
          .then(res => {
            if(res.ok) {
              navigate('/login')
            }
          })
          .catch(err => {console.error(err)})

        break
      }
      case 'Company': {
        const requestBody = {
          email: email.current,
          password: password.current,
          confirmPassword: confirmPassword.current,
          companyName: companyName.current,
          phoneNumber: phoneNumber.current,
          location: location.current,
          mediaLinks: [] as MediaLink[]
        }
        if(linkin.current) requestBody.mediaLinks.push({ "type": "Linkedin", "url": linkin.current })
        if(github.current) requestBody.mediaLinks.push({ "type": "Github", "url": github.current })
        if(facebook.current) requestBody.mediaLinks.push({ "type": "Facebook", "url": facebook.current })
        console.log(requestBody)

        fetch('http://localhost:8000/auth/register/company', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(requestBody)
        })
          .then(res => {
            if(res.ok) {
              navigate('/login')
            }
          })
          .catch(err => {console.error(err)})

        break
      }
      default: {
        return
      }
    }
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
        <form onSubmit={onSubmit} className="register-form">
          <FormHeader title="Sign up" >
            <p>Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>Login</Link></p>
          </FormHeader>
          <SignupAs setSelectedRole={setSelectedRole} />
          <FormInput setRef={setEmail} title="Email" placeholder="Enter your email here" variant="outlined" type="email" required={true} />
          <div className="password-field">
            <FormInput setRef={setPassword} title="Password" placeholder="Must at least 8 characters" minLength={8} variant="outlined" type="password" required={true} />
            <FormInput setRef={setConfirmPassword} title="Confirm Password" placeholder="Must at least 8 characters" minLength={8} variant="outlined" type="password" required={true} />
          </div>
          {selectedRole == '' ?
            <></> :
            selectedRole == 'Student' ?
              <StudentForm /> :
              <CompanyForm />
          }
          <FormButton title="Sign up" />
        </form>
      </div>
    </div>
  );
}


export default Login;