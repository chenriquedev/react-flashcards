import { get, onDelete, create, edit } from "./httpService";
import getId from "./services";
export async function apiGetAllFlashCards() {
  const flashCards = await get("/allflashcards");
  return flashCards.data;
}

export async function apiDeleteFlashCard(cardID) {
  await onDelete(`/allflashcards/${cardID}`);
}

export async function apiCreateFlashCard(title, description){
  const newFlashCard = await create('/allflashcards', {id: getId(), title, description})
  return newFlashCard.data
}
export async function apiEditFlashCard(id, title, description){
  const newFlashCard = await edit(`/allflashcards/${id}`, {title, description})
  return newFlashCard.data
}