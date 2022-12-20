import classes from './index.module.scss';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillFacebook, AiOutlineLink } from 'react-icons/ai';
import limitString from '../../utils/limitString';

interface Props {
  type: 'linkedin' | 'github' | 'facebook' | 'personalWeb';
  url: string;
}

function MediaLink(props: Props) {
  return (
    <a
      href={`https://${props.url}`}
      target="_blank"
      className={classes.container}
    >
      <div>
        {props.type == 'linkedin' && <BsLinkedin size={32} />}
        {props.type == 'github' && <BsGithub size={32} />}
        {props.type == 'facebook' && <AiFillFacebook size={32} />}
        {props.type == 'personalWeb' && <AiOutlineLink size={32} />}
      </div>
      {limitString(props.url.toString(), 70)}
    </a>
  );
}

export default MediaLink;
