import getId from "../../Config/services"

function RadioButton({description, id = getId(), onButtonClick = null}) {
    function handleValor(id){
        if(onButtonClick){
            onButtonClick()
        }
    }
  return (
    <div className="flex flex-row items-center justify-center space-x-2">
      <input type="radio"name="radioButton" id={id}  onChange={handleValor}/>
      <label htmlFor={id}>{description}</label>
    </div>
  );
}

export default RadioButton;
