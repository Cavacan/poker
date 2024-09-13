// poker/drawCard.js

export function drawCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1); // 選択したカードをデッキから削除
  return card;
}
