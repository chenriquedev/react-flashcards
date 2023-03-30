import getId from "../../Config/services";

function TextInput({labelDescription = "descricao da label", onInputChange = null, inputType, inputId = getId(), autoFocus = false, inputValue = 'Valor padrao do Input'}) {
  const handleInputChange = ({ currentTarget }) => {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  };
  return (
    <div className="flex flex-col py-4">
      <label className="mb-2" htmlFor={inputId}>
        {labelDescription}
      </label>
      <input
        autoFocus={autoFocus}
        className="border p-1"
        type={inputType}
        id={inputId}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default TextInput;
