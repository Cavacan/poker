// poker/combos.js

export function getCombo(hand) {
  // 手札に基づいて役を判断（シンプルな例としてペアのみを実装）
  const rankCount = {};

  hand.forEach(card => {
    rankCount[card.rank] = (rankCount[card.rank] || 0) + 1;
  });

  const pairs = Object.values(rankCount).filter(count => count === 2).length;

  if (pairs === 1) {
    return 'One Pair';
  }
  return 'High Card';
}
