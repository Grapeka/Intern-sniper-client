import React, { useState } from "react";
import { useNavigate } from "react-router";
import useRefAsState from "../../hooks/useRefAsState";
import { mediaLinkType } from "../../interfaces/enum";
import MediaLink from "../../interfaces/MediaLink";
import { uploadImage } from "../../utils/image";
import BrowseAvatar from "../BrowseAvatar";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import MediaLinks from "../MediaLinks";
import classes from './index.module.scss'

interface Props {
  email: string
  password: string
  confirmPassword: string
}

function StudentForm(props: Props) {
  const [firstName, setFirstName] = useRefAsState()
  const [lastName, setLastName] = useRefAsState()
  const [university, setUniversity] = useRefAsState()
  const [studyingYear, setStudyingYear] = useRefAsState()
  const [interestedField, setInterestedField] = useRefAsState()
  const [linkedin, setLinkedin] = useRefAsState()
  const [github, setGithub] = useRefAsState()
  const [facebook, setFacebook] = useRefAsState()
  const [personalWeb, setPersonalWeb] = useRefAsState()
  const [imageFile, setImageFile] = useState<File>()
  const navigate = useNavigate()

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    let imageName = 'defaultImage.png'
    if(imageFile != null) {
      const res = await uploadImage(imageFile)
      if(res.success) {
        imageName = res.path
      }
    }
    console.log(imageName)
    
    const requestBody = {
      email: props.email,
      password: props.password,
      confirmPassword: props.confirmPassword,
      profilePicture: imageName,
      firstName: firstName.current,
      lastName: lastName.current,
      university: university.current,
      studyingYear: studyingYear.current,
      interestedField: interestedField.current.split(','),
      mediaLinks: [] as MediaLink[]
    }
    if (linkedin.current) requestBody.mediaLinks.push({ type: mediaLinkType.LINKEDIN, url: linkedin.current })
    if (github.current) requestBody.mediaLinks.push({ type: mediaLinkType.GITHUB, url: github.current })
    if (facebook.current) requestBody.mediaLinks.push({ type: mediaLinkType.FACEBOOK, url: facebook.current })
    if (personalWeb.current) requestBody.mediaLinks.push({ type: mediaLinkType.PERSONALWEB, url: personalWeb.current })
    console.log(JSON.stringify(requestBody))

    fetch(import.meta.env.VITE_BACKEND_URL + '/auth/register/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
      .then(res => {
        if (res.ok) {
          return navigate('/login')
        }
      })
      .catch(err => { console.error(err) })
  }

  return (
    <form onSubmit={onSubmit} className={classes.studentRegisterForm} >
      <BrowseAvatar setImageFile={setImageFile} />
      <div className={classes.fullname}>
        <FormInput setRef={setFirstName} title="First Name" placeholder="Enter your first name..." variant="outlined" type="text" required></FormInput>
        <FormInput setRef={setLastName} title="Last Name" placeholder="Enter your last name..." variant="outlined" type="text" required></FormInput>
      </div>
      <div className={classes.university}>
        <FormInput setRef={setUniversity} title="University" placeholder="Enter your university here. e.g. Kasetsart, ..." variant="outlined" type="text" required></FormInput>
        <FormInput setRef={setStudyingYear} title="Studying Year" widthSize="width-small" variant="outlined" placeholder="1-12" type="number" min={1} max={12} required></FormInput>
      </div>
      <FormInput setRef={setInterestedField} title="Interest Fields" placeholder="e.g. software engineer, data science, photographer" variant="outlined" type="text" />
      <MediaLinks setLinkedin={setLinkedin} setGithub={setGithub} setFacebook={setFacebook} setPersonalWeb={setPersonalWeb} />
      <FormButton title="Sign up" />
    </form>
  )
}

export default StudentForm