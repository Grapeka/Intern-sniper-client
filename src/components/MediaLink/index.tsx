import classes from './index.module.scss'

interface Props {
  type: 'linkedin' | 'github' | 'facebook' | 'personalWeb'
  url: string
}

function LinkedinIcon() {
  return (
    <div className={classes.icon}>
      <img src="/linkedin.png" alt="linkedin" />
    </div>
  )
}

function GithubIcon() {
  return (
    <div className={classes.icon}>
      <img src="/github.png" alt="github" />
    </div>
  )
}

function FacebookIcon() {
  return (
    <div className={classes.icon}>
      <img src="/facebook.png" alt="facebook" />
    </div>
  )
}

function PersonalWebIcon() {
  return (
    <div className={classes.icon}>
      <img src="/world-wide-web.png" alt="personalWeb" />
    </div>
  )
}

function MediaLink(props: Props) {
  return (
    <a href={props.url} className={classes.container}>
      {props.type == 'linkedin' && <LinkedinIcon />}
      {props.type == 'github' && <GithubIcon />}
      {props.type == 'facebook' && <FacebookIcon />}
      {props.type == 'personalWeb' && <PersonalWebIcon />}
      {props.url}
    </a>
  )
}

export default MediaLink;