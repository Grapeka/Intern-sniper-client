import './RadioCard.css'

interface Props {
  title: string,
  setSelectedRole?: React.Dispatch<React.SetStateAction<"" | "Student" | "Company">>
}

function RadioCard(props: Props) {

  function onClick() {
    const radio = document.getElementById(props.title) as HTMLInputElement
    if(radio == null) return
    radio.checked = true

    const radioContainer = document.querySelector('.radio-container') as HTMLDivElement
    radioContainer.childNodes.forEach(elemnet => {
      const radioCard = elemnet as HTMLDivElement
      const radio = elemnet.firstChild as HTMLInputElement
      if(radio.checked) {
        radioCard.style.border = '2px solid blue'
        radioCard.style.backgroundColor = 'rgba(0,51,255,0.08)'
        radioCard.style.color = 'blue'
      }
      else {
        radioCard.style.border = '2px solid gainsboro'
        radioCard.style.backgroundColor = 'white'
        radioCard.style.color = 'black'
      }
    })
    if(props.setSelectedRole != null) props.setSelectedRole(props.title as '' | 'Student' | 'Company')
  }

  return ( 
    <div className="radio-card" onClick={onClick} >
      <input id={ props.title } type="radio" name="for" value={ props.title } required />
      <p>{ props.title }</p>
    </div>
  );
}

export default RadioCard;