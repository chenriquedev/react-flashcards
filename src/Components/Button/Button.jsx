function Button({description, onCLickButton = null, type='button', bgColor = 'bg-gray-200'}) {
    function onCLickBut(){
        if(onCLickButton){
            onCLickButton()
        }
    }
  return (
   
  <div >
    <button className={`${bgColor} border p-2 bg-gray-200 rounded-lg`} type={type} onClick={onCLickBut}>{description}</button>
  </div>
  );
}

export default Button;