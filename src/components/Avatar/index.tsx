import classes from './index.module.scss'

interface Props {
  imageUrl: string | null
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
          src={props.imageUrl == '' || props.imageUrl == null 
            ? '/default_image.jpg' 
            :  props.imageUrl}
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Avatar;