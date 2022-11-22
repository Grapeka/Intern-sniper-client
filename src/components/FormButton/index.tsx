import './FormButton.css'

interface Props {
    title: string
}

const FormButton = (props: Props) => (
  <button className="form-button" type="submit">{props.title}</button>
);

export default FormButton