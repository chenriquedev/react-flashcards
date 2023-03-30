import FlashCardsList from "../FlashCardsList/FlashCardsList";

function FlashCards({children}) {
  return (
  <div className="border flex flex-row flex-wrap items-center justify-center">
    {children}
  </div>
  );
}

export default FlashCards;