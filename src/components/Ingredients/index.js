// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Ingredient from './ingredients';
import './ingredient.scss';

const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        id={ingredient.id}
        name={ingredient.name}
        quantity={ingredient.quantity}
        unit={ingredient.unit}
      />
    ))}
  </ul>
);

// export du composant
export default Ingredients;
