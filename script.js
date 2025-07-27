const suits = ['♠', '♥', '♦', '♣'];
const values = [
  'A', '2', '3', '4', '5', '6', '7',
  '8', '9', '10', 'J', 'Q', 'K'
];

// Generate full 52-card deck
let deck = [];
for (let suit of suits) {
  for (let value of values) {
    deck.push({ suit, value });
  }
}

// Shuffle using Fisher-Yates
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [deck[i], deck[j]] = [deck[j], deck[i]];
}

// Deal 25 cards
const hand = deck.slice(0, 25);

const container = document.getElementById('card-container');

hand.forEach(card => {
  const div = document.createElement('div');
  div.className = 'card';
  if (card.suit === '♥' || card.suit === '♦') {
    div.classList.add('red');
  }
  div.innerHTML = `${card.value}<br>${card.suit}`;
  container.appendChild(div);
});
