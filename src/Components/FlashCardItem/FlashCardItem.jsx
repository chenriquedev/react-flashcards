import {MdDeleteOutline, AiOutlineEdit} from 'react-icons/all'
function FlashCardItem({ children: flashcard ,  onDeleteClick = null, onEdit = null}) {
  const { title, description, id} = flashcard;

  function onClickDeleteButton(){
    if(onDeleteClick){
        onDeleteClick(id)
    }
  }
  function onClickEditButton(){
    if(onEdit){
        onEdit(flashcard)
    }
  }
  return (
    <div  className='m-2 p-2 border'>
      <ul>
        <li>
          <strong>Title: </strong> <span> {title}</span>
        </li>
        <li>
          <strong>Description: </strong> <span> {description}</span>
        </li>
      </ul>
      <div className='flex flex-row space-x-4 justify-end'>
        <AiOutlineEdit className='cursor-pointer ' size={24} onClick={onClickEditButton}/> 
        <MdDeleteOutline className='cursor-pointer ' size={24} onClick={onClickDeleteButton}/>
      </div>
    </div>
  );
}

export default FlashCardItem;
