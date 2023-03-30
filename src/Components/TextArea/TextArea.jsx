import { useState } from "react";
import getId from "../../Config/services";

function TextArea({labelDescription = "descricao da label", onInputChange = null,  inputId = getId(),  textValue = 'Valor padrao do Text Area', maxLenght= 230, rows = 4}) {
    const handleInputChange = ({ currentTarget }) => {
      if (onInputChange) {
        const newValue = currentTarget.value;
        onInputChange(newValue);
      }
    };
    return (
      <div className="flex flex-col py-4 ">
        <label className="mb-2" htmlFor={inputId}>
          {labelDescription}
        </label>
        <textarea
          className="border p-1 resize-none"
          rows={rows}
          id={inputId}
          value={textValue}
          onChange={handleInputChange}
          maxLength={maxLenght}
        />
        <span className="text-right mr-1">{textValue.length} / {maxLenght}</span>
      </div>
    );
  }

export default TextArea;