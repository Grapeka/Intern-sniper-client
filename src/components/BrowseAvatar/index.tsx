import { useState } from "react";
import Avatar from "../Avatar";
import classes from './index.module.scss'

interface Props {
  setImageFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

function BrowseAvatar(props: Props) {
  const [previewImage, setPreviewImage] = useState<string>('')

  function changeImage(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.files === null) return 

    const image = e.target.files[0]
    props.setImageFile(image)

    const previewImage = URL.createObjectURL(image)
    setPreviewImage(previewImage)
  }


  return (
    <div className={classes.browseImage}>
      <Avatar imageUrl={previewImage} size="xxl" border={false} />
      <div className={classes.container}>
        <label htmlFor="file" className={classes.browseButton}>Browse</label>
        <input id="file" type="file" className={classes.none} onChange={changeImage} />
      </div>
    </div>
  )
}

export default BrowseAvatar;