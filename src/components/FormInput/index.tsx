import './FormInput.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  title: string,  
  description?: string,
  type: string,
  placeholder?: string,
  required?: boolean,
  min?: number,
  max?: number,
  options?: string[],
  value?: string,
  minLength?: number,
  variant: "standard" | "filled" | "outlined" | undefined,
  widthSize?: 'width-small' | 'width-normal' | 'width-large',
  setRef: (value: string) => void
}

const FormInput = (props: Props) => {

  if(props.type == 'autocomplete' && props.options != null) 
    return (
      <div className="form-input">
        <label>{props.title}</label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={props.options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    )
  
  return (
    <div className={"form-input " + props?.widthSize}>
      <label>{props.title}{props.required && '*'}</label>
      <input type={props.type} value={props.value} placeholder={props.placeholder} min={props.min} max={props.max} minLength={props.minLength} required={props.required} onChange={(e) => {
        if(props.setRef != null) props.setRef(e.target.value)
      }
      } />
    </div>
  )
};

export default FormInput