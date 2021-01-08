import chocolateShop from './imgs/choc_shop.jpg';
import chocolateHover from './imgs/choc_hover.jpg';
import chocolateItem from './imgs/choc_item.jpg';
import vanillaShop from './imgs/vanilla_shop.jpg';
import vanillaHover from './imgs/vanilla_hover.jpg';
import vanillaItem from './imgs/vanilla_item.jpg';
import originalShop from './imgs/original_shop.jpg';
import originalHover from './imgs/original_hover.jpg';
import originalItem from './imgs/original_item.jpg';

const completeMeal = [
  {
    name: 'Soylent Drink Creamy Chocolate',
    id: 'soylent-drink-creamy-chocolate',
    price: 42.0,
    pricePerBottle: '$3.50 / bottle',
    itemDesc:
      'Move over Cacao, there is a new and improved complete Chocolate ready-to-drink meal! This one is more delicious, and now with 39 essential nutrients and only 1g of sugar!',
    shopPic: chocolateShop,
    hoverPic: chocolateHover,
    itemPic: chocolateItem,
    circle1: ['Plant-Based Protein', '20g'],
    circle2: ['Essential Nutrients', '39'],
    circle3: ['Total Sugars', '1g'],
    circle4: ['Calories', '400'],
    circle5: ['Omega-3', '600mg'],
  },
  {
    name: 'Soylent Drink Vanilla',
    id: 'soylent-drink-vanilla',
    price: 42.0,
    pricePerBottle: '$3.50 / bottle',
    itemDesc:
      'Classic vanilla flavor with a sweet, subtle taste and no added caffeine. A ready-to-drink meal offering 400 kcal, 39 essential nutrients, and 20g of plant-based protein.',
    shopPic: vanillaShop,
    hoverPic: vanillaHover,
    itemPic: vanillaItem,
    circle1: ['Plant-Based Protein', '20g'],
    circle2: ['Essential Nutrients', '39'],
    circle3: ['Total Sugars', '1g'],
    circle4: ['Calories', '400'],
    circle5: ['Omega-3', '600mg'],
  },
  {
    name: 'Soylent Drink Original',
    id: 'soylent-drink-original',
    price: 39.0,
    pricePerBottle: '$3.25 / bottle',
    itemDesc:
      'The flavor that started it all — light, sweet, and velvety smooth. A ready-to-drink meal offering 400 kcal, 39 essential nutrients, and 20g of plant-based protein.',
    shopPic: originalShop,
    hoverPic: originalHover,
    itemPic: originalItem,
    circle1: ['Plant-Based Protein', '20g'],
    circle2: ['Essential Nutrients', '39'],
    circle3: ['Total Sugars', '1g'],
    circle4: ['Calories', '400'],
    circle5: ['Omega-3', '600mg'],
  },
];

export default completeMeal;
