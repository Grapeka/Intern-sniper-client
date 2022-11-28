import './FormInput.css'

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
  disable?: boolean,
  minLength?: number,
  variant: "standard" | "filled" | "outlined" | undefined,
  widthSize?: 'width-small' | 'width-normal' | 'width-large',
  setRef?: (value: string) => void
  setState?: any
  setTimeline?: any
}

const FormInput = (props: Props) => {

  return (
    <div className={"form-input " + props?.widthSize}>
      <label>{props.title}{props.required && '*'}</label>
      <input type={props.type} disabled={props.disable} defaultValue={props.value} placeholder={props.placeholder} min={props.min} max={props.max} minLength={props.minLength} required={props.required} onChange={(e) => {
        if(props.setRef != null) props.setRef(e.target.value)
        if(props.setState != null) props.setState(e.target.value)
        if(props.setTimeline != null) props.setTimeline(e.target.value)
      }
        } />
    </div>
  )
};

export default FormInput
