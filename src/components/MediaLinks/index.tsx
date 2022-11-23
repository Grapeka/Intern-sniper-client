import FormInput from "../FormInput"

interface Props {
  setLinkedin: (input: string) => void
  setGithub: (input: string) => void
  setFacebook: (input: string) => void
  setPersonalWeb: (input: string) => void
}

function MediaLinks(props: Props) {
  return (
    <>
      <FormInput setRef={props.setLinkedin} title="Linkedin" placeholder="e.g. https://gr.linkedin.com/in/example" variant="outlined" type="text" ></FormInput>
      <FormInput setRef={props.setGithub} title="Github" placeholder="e.g. https://github.com/example" variant="outlined" type="text" ></FormInput>
      <FormInput setRef={props.setFacebook} title="Facebook" placeholder="e.g. https://www.facebook.com/example" variant="outlined" type="text" ></FormInput>
      <FormInput setRef={props.setPersonalWeb} title="Personal Website" placeholder="e.g. https://www.custom-domain.example.com/" variant="outlined" type="text" ></FormInput>
    </>
  )
}

export default MediaLinks