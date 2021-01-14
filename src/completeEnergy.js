import energyShop from './imgs/energy_shop.jpg';
import energyHover from './imgs/energy_hover.jpg';
import energyItem from './imgs/energy_item.jpg';

const completeEnergy = {
  name: 'Soylent Complete Energy Chocolate',
  id: 'soylent-complete-energy-chocolate',
  price: 33.0,
  pricePerBottle: '$2.75 / bottle',
  itemDesc:
    'This is not your typical energy drink. It is the first complete nutrition nootropics shake to fuel your mind and body. Formulated with a proprietary blend of b vitamins, caffeine, l-theanine, l-tyrosine, and alpha-GPC plus 15g of plant based protein and 39 essential nutrients. A delicious way to keep you going throughout the day without sugar highs and lows.',
  shopPic: energyShop,
  hoverPic: energyHover,
  itemPic: energyItem,
  circle1: { type: 'Energy & Focus Boosters', units: '5' },
  circle2: { type: 'Plant-Based Protein', units: '15g' },
  circle3: { type: 'Essential Nutrients', units: '39' },
  circle4: { type: 'Omega-3', units: '450mg' },
  circle5: { type: 'Total Sugars', units: '3g' },
};

export default completeEnergy;
