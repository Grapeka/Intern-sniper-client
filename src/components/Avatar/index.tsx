import classes from './index.module.scss'

interface Props {
  imageName: string
  size: 'sm' | 'xxl'
  border: boolean
}

function Avatar(props: Props) {
  return (
    <div className={classes.circle + ' ' + 
      (props.size == 'sm' ? classes.sm : classes.xxl) + ' ' +
      (props.border == true ? classes.border : '')
    }>
      <div className={classes.imgBox}>
        <img
          className={classes.img}
          src={props.imageName == '' ? '/default_image.jpg' : props.imageName}
          alt=""
        />
      </div>
    </div>
  );
}

export default Avatar;