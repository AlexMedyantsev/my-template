import moment from 'moment-with-locales-es6';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const returnLinkToRarityGemImage = (item) => {
  switch (item.rarity) {
    case "blue":
      return " collectibles__gem--blue";
    case "purple":
      return " collectibles__gem--purple";
    case "orange":
      return " collectibles__gem--orange";
    case "green":
      return " collectibles__gem--green";
    default:
      return null;
  }
}

export const escPressHandler = (evt) => {
  if (evt.keyCode === 27) {
  }
}

export const getCollectedCardsCountByRarity = (cards, rarity) => {
  let count = 0;

  cards.map(card => card.rarity === rarity && card.isCollected ? count++ : '')

  return count
}

