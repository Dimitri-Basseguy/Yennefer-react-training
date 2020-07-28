// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Ingredient from './ingredients';
import './ingredient.scss';

// Ingredients sert de passe-plat pour fournir l'ingrédient à Ingredient
// ... => spread operator, on déverse tout ce qui est dans ingredient
// {...ingredient} => je fournis name, quantity, unit, id
// {ingredient} => je fournis un objet
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        {...ingredient}
      />
    ))}
  </ul>
);

Ingredients.propTypes = {
  // tableau d'objets
  // ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  // c'est mieux de préciser la forme de l'objet
  ingredients: PropTypes.arrayOf(
    // a la forme d'un objet
    PropTypes.shape({
      // avec telles propriétés
      // on indique seulement les propriétés qu'on utilise dans le composant Ingredients
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};


// export du composant
export default Ingredients;
