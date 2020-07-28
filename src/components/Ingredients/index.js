// == Import npm
import React from 'react';

// == Import
import './ingredient.scss';

const Ingredients = () => (
  <ul className="ingredients">
    <li className="ingredient">
      <span className="quantity">150 g</span> de farine
    </li>
    <li className="ingredient">
      <span className="quantity">100 g</span> de sucre
    </li>
    <li className="ingredient">
      <span className="quantity">25 g</span> de chocolat
    </li>
  </ul>
);

// export du composant
export default Ingredients;
