import './FormHeader.css'

interface Props {
  title: string,
  children?: JSX.Element
}

const FormHeader = (props: Props) => (
  <div className="form-header-container">
    <h1 id="headerTitle" className='text-3xl'>{props.title}</h1>
    {props.children}
  </div>
);

export default FormHeader