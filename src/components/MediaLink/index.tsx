import classes from './index.module.scss'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillFacebook, AiOutlineLink } from 'react-icons/ai'

interface Props {
  type: 'linkedin' | 'github' | 'facebook' | 'personalWeb'
  url: string
}

function MediaLink(props: Props) {
  return (
    <a href={props.url} className={classes.container}>
      {props.type == 'linkedin' && <BsLinkedin size={32} />}
      {props.type == 'github' && <BsGithub size={32} />}
      {props.type == 'facebook' && <AiFillFacebook size={32} />}
      {props.type == 'personalWeb' && <AiOutlineLink size={32} />}
      {props.url}
    </a>
  )
}

export default MediaLink;
