import { newDeck } from './newDeck.js';
import { drawCard } from './drawCard.js';
import { judgeHand } from './judgeHand.js';

function playPoker() {
  let deck = newDeck(); // 新しいデッキを作成
  let hand1 = [];
  let hand2 = [];

  // 各プレイヤーに5枚ずつカードを引く
  for (let i = 0; i < 5; i++) {
    hand1.push(drawCard(deck));
    hand2.push(drawCard(deck));
  }

  const player_hand1 = document.getElementById("hand1");
  const player_hand2 = document.getElementById("hand2");

  // プレイヤーの手札を表示
  player_hand1.textContent = `Player 1's hand: ${hand1.map(card => `${card.rank} of ${card.suit}`).join(', ')}`;
  player_hand2.textContent = `Player 2's hand: ${hand2.map(card => `${card.rank} of ${card.suit}`).join(', ')}`;
  
  // 勝敗を判定
  const result = judgeHand(hand1, hand2);
  console.log(result);
}

// DOMの読み込み完了後にイベントリスナーを設定
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playPoker").addEventListener("click", playPoker);
});
