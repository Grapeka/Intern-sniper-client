import './FormButton.css'

interface Props {
    title: string
}

const FormButton = (props: Props) => (
  <button className="bg-blue-600 rounded-lg text-white p-3 font-bold mt-2" type="submit">{props.title}</button>
);

export default FormButton
