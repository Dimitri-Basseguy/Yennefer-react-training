// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './ingredient.scss';

const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <li key={ingredient.id} className="ingredient">
        <span className="quantity">{ingredient.quantity} {ingredient.unit}</span> {ingredient.name}
      </li>
    ))}
  </ul>
);

// Validation des props
Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    // à la forme d'un object => {}
    PropTypes.shape({
      // avec telles propriétés
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// export du composant
export default Ingredients;
