import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Student from "../../interfaces/Student";
import Company from "../../interfaces/Company";
import classes from './index.module.scss'
import Avatar from "../../components/Avatar";
import FormInput from "../../components/FormInput";
import MediaLink from "../../components/MediaLink";
import AppPage from "../../layouts/AppPage";
import User from "../../types/User";

interface Props {
  user: User
}

interface studentProps {
  student: Student
  userId: string
}

interface companyProps {
  company: Company
  userId: string
}

function StudentProfile(props: studentProps) {
  return (
    <div className={classes.profile} >
      <div className={classes.center}>
        <Avatar imageUrl={import.meta.env.VITE_BACKEND_URL + '/image/' + props.student.profilePicture} size="xxl" border={false} />
      </div>
      <div className={classes.twoColumn}>
        <FormInput disable value={props.student.firstName} title="First Name" placeholder="Enter your first name..." variant="outlined" type="text" required></FormInput>
        <FormInput disable value={props.student.lastName} title="Last Name" placeholder="Enter your last name..." variant="outlined" type="text" required></FormInput>
      </div>
      <div className={classes.twoColumn}>
        <FormInput disable value={props.student.university} title="University" placeholder="Enter your university here. e.g. Kasetsart, ..." variant="outlined" type="text" required></FormInput>
        <FormInput disable value={props.student.studyingYear.toString()} title="Studying Year" widthSize="width-small" variant="outlined" placeholder="1-12" type="number" min={1} max={12} required></FormInput>
      </div>
      <FormInput disable value={props.student.interestedField.join()} title="Interest Fields" placeholder="e.g. software engineer, data science, photographer" variant="outlined" type="text" />
      {props.student.mediaLink && 
      <>
        <p className={classes.label}>Links</p>
        {props.student.mediaLink.map(link => {
          switch (link.type) {
            case '0': {
              return <MediaLink type='linkedin' url={link.url} />
            }
            case '1': {
              return <MediaLink type='github' url={link.url} />
            }
            case '2': {
              return <MediaLink type='facebook' url={link.url} />
            }
            case '3': {
              return <MediaLink type='personalWeb' url={link.url} />
            }
            default: {
              return <></>
            }
          }
        })}
      </>
      }
    </div>
  )
}

function CompanyProfile(props: companyProps) {
  return (
    <div className={classes.profile} >
      <div className={classes.center}>
        <Avatar imageUrl={import.meta.env.VITE_BACKEND_URL + '/image/' + props.company.profilePicture} size="xxl" border={false} />
      </div>
      <div className={classes.twoColumn}>
        <FormInput disable value={props.company.companyName} title="Company Name" required placeholder="Enter your company name here" variant="outlined" type="text" />
        <FormInput disable value={props.company.phoneNumber} title="Phone" required placeholder="Enter your phone number here" variant="outlined" type="text" />
      </div>
      <div className={classes.twoColumn}>
        <FormInput disable value={props.company.country} title="Country" required placeholder="e.g. Thailand, Paris, Malaysia" variant="outlined" type="text" />
        <FormInput disable value={props.company.province} title="Province" required placeholder="e.g. Bangkok, Nonthaburi, Saraburi" variant="outlined" type="text" />
      </div>
      {props.company.mediaLink && 
      <>
        <p className={classes.label}>Links</p>
        {props.company.mediaLink.map(link => {
          switch (link.type) {
            case '0': {
              return <MediaLink type='linkedin' url={link.url} />
            }
            case '1': {
              return <MediaLink type='github' url={link.url} />
            }
            case '2': {
              return <MediaLink type='facebook' url={link.url} />
            }
            case '3': {
              return <MediaLink type='personalWeb' url={link.url} />
            }
            default: {
              return <></>
            }
          }
        })}
      </>
      }
    </div>
  )
}

function Profile(props: Props) {
  const [profile, setProfile] = useState<User>()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  if(id == null) return <></>
  
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + `/users/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {setProfile(data); setLoading(false); console.log(data)})
      .catch(err => console.error(err))
  }, [])

  if(loading) {
    return <>Loading</>
  }

  return (
    <AppPage user={props.user}>
      {profile?.role == 'Student'
        ? <StudentProfile student={profile as Student} userId={id} /> 
        : <CompanyProfile company={profile as Company} userId={id} />
      }
    </AppPage>
  );
}

export default Profile;