import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Button from "../Components/Button/Button";
import FlashCards from "../Components/FlashCards/FlashCards";
import FlashCardsList from "../Components/FlashCardsList/FlashCardsList";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import RadioButton from "../Components/RadioButton/RadioButton";

import { embaralhaArray } from "../helpers/arrayHelpers";
import { apiCreateFlashCard, apiDeleteFlashCard, apiEditFlashCard, apiGetAllFlashCards } from "../Config/apiService";
import FlashCardItem from "../Components/FlashCardItem/FlashCardItem";
import FormFlashCard from "../Components/FormFlashCard/FormFlashCard";
import getId from "../Config/services";

function ReactFlashCards() {
  const [theFlashCards, setTheFlashCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [selectIndex, setSelectIndex] = useState(0)
  const [createMode, setCreateMode] = useState(true)
  const[selectedFlashCard, setSelectFlashCard] = useState(null)
  useEffect(() => {
    async function getAllFlashCards() {
      const dadosBackEnd = await apiGetAllFlashCards();
      setTheFlashCards(dadosBackEnd);
    }
    getAllFlashCards();
  }, []);

  useEffect(() => {
    const dados = theFlashCards
      .map((dados) => ({ ...dados, showTitle: true}))
      .sort((a, b) => a.title.localeCompare(b.title));
    setStudyCards(dados);
  }, [theFlashCards]);

  function changeFlashCard(cardID) {
    const newArray = [...studyCards];
    const cardIndex = newArray.findIndex((card) => card.id === cardID);
    newArray[cardIndex].showTitle = !newArray[cardIndex].showTitle;
    setStudyCards(newArray);
  }

  function toggleShowTitle() {
    const newArray = [...studyCards];
    const newA = newArray.map((dados) => ({ ...dados, showTitle: true }));
    setStudyCards(newA);
  }

  function toggleShowDescription() {
    const newArray = [...studyCards];
    const newA = newArray.map((dados) => ({ ...dados, showTitle: false }));
    setStudyCards(newA);
  }

  function handleClickButton() {
    const newArray = [...studyCards];
    const shuffledArray = embaralhaArray(newArray);
    setStudyCards(shuffledArray);
  }

  async function onDeleteButton(cardID) {
    try{
     await apiDeleteFlashCard(cardID)
      setTheFlashCards(theFlashCards.filter(card => card.id !== cardID))

    }catch(error){
      console.log(error)
    }
  }

  function onEditButton(card){
    setSelectFlashCard(card)
    setCreateMode(false)
    setSelectIndex(1)
  }
  
  function handleSelectIndex(tabIndex){
    setSelectIndex(tabIndex)
  }

  function handleNewCard(){
    setCreateMode(true)
    setSelectFlashCard(null)
  }

  async function handlePersist(title, description){
    if(createMode){

      const newFlash = await apiCreateFlashCard(title, description)
      setTheFlashCards([...theFlashCards, newFlash])
    }
    else{
      await apiEditFlashCard(selectedFlashCard.id, title, description)
      setTheFlashCards(theFlashCards.map(card=>{
        if(card.id === selectedFlashCard.id){
          return {...card, title, description}
        }
        setCreateMode(true)
        setSelectFlashCard(null)
        return card
      }))
    }
  }
  return (
    <>
      <Header title="React Flash Cards" />
      <Main>
        <Tabs selectedIndex={selectIndex} onSelect={handleSelectIndex}>
          <TabList>
            <Tab>Listagem</Tab>
            <Tab>Cadastro</Tab>
            <Tab>Estudo</Tab>
          </TabList>

          <TabPanel>
            {theFlashCards.map((flashcard) => {
              return (
                <FlashCardItem
                  key={flashcard.id}
                  onDeleteClick={onDeleteButton}
                  onEdit={onEditButton}
                >
                  {flashcard}
                </FlashCardItem>
              );
            })}
          </TabPanel>
          <TabPanel>
            <div className="my-4">
            <Button onCLickButton={handleNewCard} description="Novo Flash Card" />
            </div>
            <FormFlashCard createMode={createMode} onPersist={handlePersist}>{selectedFlashCard}</FormFlashCard>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-row items-center justify-center m-2">
              <Button
                description="embaralhar"
                onCLickButton={handleClickButton}
              />
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 m-4">
              <RadioButton
                description="Show Title"
                id="onShowTittle"
                onButtonClick={toggleShowTitle}
              />
              <RadioButton
                description="Show Description"
                id="onShowDescription"
                onButtonClick={toggleShowDescription}
              />
            </div>
            <FlashCards>
              {studyCards.map(({ id, title, description, showTitle }) => (
                <FlashCardsList
                  key={id}
                  title={title}
                  description={description}
                  id={id}
                  onToggleFlashCard={changeFlashCard}
                  onShowTitle={showTitle}
                />
              ))}
            </FlashCards>
          </TabPanel>
        </Tabs>
      </Main>
    </>
  );
}

export default ReactFlashCards;
