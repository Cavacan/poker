// poker/judgeHand.js

import { getCombo } from './combos.js';

export function judgeHand(hand1, hand2) {
  const comboRank = {
    'High Card': 1,
    'One Pair': 2
    // 他の役も追加可能
  };

  const hand1Combo = getCombo(hand1);
  const hand2Combo = getCombo(hand2);

  if (comboRank[hand1Combo] > comboRank[hand2Combo]) {
    return 'Hand 1 wins';
  } else if (comboRank[hand1Combo] < comboRank[hand2Combo]) {
    return 'Hand 2 wins';
  } else {
    return 'It\'s a tie';
  }
}
