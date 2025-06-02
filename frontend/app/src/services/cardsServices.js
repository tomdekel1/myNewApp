import httpService from "./httpServices";

async function getAllCards() {
  try {
    const cards = await httpService.get("/api/cards");
    return cards;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getCard(cardID) {
  try {
    const card = await httpService.get(`/api/cards/${cardID}`);
    return card;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function likeCard(cardID) {
  try {
    const card = await httpService.patch(`/api/cards/${cardID}`);
    return card;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function commentOnCard(cardID, comment) {
  try {
    const card = await httpService.patch(
      `/api/cards/comment/${cardID}`,
      comment
    );
    return card;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const cardService = {
  getAllCards,
  likeCard,
  commentOnCard,
  getCard,
};

export default cardService;
