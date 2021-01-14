import proteinShop from './imgs/protein_shop.jpg';
import proteinHover from './imgs/protein_hover.jpg';
import proteinItem from './imgs/protein_item.jpg';

const completeProtein = {
  name: 'Soylent Complete Protein Chocolate',
  id: 'soylent-complete-protein-chocolate',
  price: 33.0,
  pricePerBottle: '$2.75 / bottle',
  itemDesc:
    'Our new plant-based, high protein nutrition shake goes well beyond the standard protein supplement including 30g of complete plant-based protein and 39 essential nutrients with 0g of sugar. This unique, nutritionally balanced shake also provides 5g BCAAs and 1,000mg omega-3 healthy fats, providing complete nutrition without sacrificing taste or texture!',
  shopPic: proteinShop,
  hoverPic: proteinHover,
  itemPic: proteinItem,
  circle1: { type: 'Plant-Based Protein', units: '30g' },
  circle2: { type: 'Essential Nutrients', units: '39' },
  circle3: { type: 'Total Sugars', units: '0g' },
  circle4: { type: 'BCAAs', units: '5g' },
  circle5: { type: 'Omega-3', units: '600mg' },
};

export default completeProtein;
