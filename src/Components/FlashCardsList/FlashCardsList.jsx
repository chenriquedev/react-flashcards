import { useState } from "react";

function FlashCardsList({title, description, id, onToggleFlashCard = null, onShowTitle}) {

  function toogleShowTitle(){
   if(onToggleFlashCard){
    onToggleFlashCard(id)
   }
  }

  const fontSize = onShowTitle ? 'text-xl' : 'text-sm'
  return (
    <div className={`border w-80 h-48 flex flex-row items-center justify-center ${fontSize} font-semibold shadow-xl m-2 p-4`} onClick={toogleShowTitle}>
    <p>
    {onShowTitle ? title : description}  
    </p>

</div>
  );
}

export default FlashCardsList;