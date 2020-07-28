// sous-composant de Ingrédients, utilisé seulement
// par ingredients, on le range dans le même dossier.

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ 
  name,
  id,
  quantity,
  unit,
}) => (
  <li className="ingredient">
    <span className="quantity">{quantity} {unit}</span> {name}
  </li>
);

// Validation des props
Ingredient.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// export du composant
export default Ingredient;
