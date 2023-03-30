import { useState } from "react";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function FormFlashCard({ createMode = true, onPersist ,children: flashcard }) {
  const FormBg = createMode ? "bg-green-200" : "bg-yellow-200";
  const [inputTitle, setInputTitle] = useState(flashcard?.title || "");
  const [inputDescription, setInputDescription] = useState(flashcard?.description || "");

  function handleTitleChange(value) {
    setInputTitle(value);
  }
  function handleDescriptionChange(value) {
    setInputDescription(value);
  }

  function clearForm(){
    setInputTitle('')
    setInputDescription('')
  }

  function handleFormSubmit(event){
    event.preventDefault()
    if(onPersist){
      onPersist( inputTitle, inputDescription)
      clearForm()
    }
  }

  function handleFormReset(){
    console.log('resetou')
    clearForm()
  }

  return (
    <form className={`${FormBg} p-4`} onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <h2 className="text-center font-semibold">Manutenção de Flash Cards</h2>
      <TextInput
        inputType="text"
        labelDescription="Title"
        inputValue={inputTitle}
        onInputChange={handleTitleChange}
      />
      <TextArea
        labelDescription="Description"
        textValue={inputDescription}
        onInputChange={handleDescriptionChange}
      />
      <div className="flex  items-center justify-end space-x-4">
        <Button description="Limpar" bgColor="bg-red-200" type="reset"/>
        <Button description="Salvar" bgColor="bg-green-400" type="submit"/>
      </div>
    </form>
  );
}

export default FormFlashCard;
