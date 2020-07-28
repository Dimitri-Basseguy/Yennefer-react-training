// == Import npm
import React from 'react';
// Librairie pour valider le type de chaque prop
import PropTypes from 'prop-types';
// == Import
import './header.scss';

// Composant
// fléchée non rcourcie
// const Header = () => {
//  return (
// 	  <div>
// 		  Le header
// 	  </div>
//    );
// };

// fléchée racourcie
const Header = ({ 
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="header">
    <img className="header-image" src={thumbnail} alt="crêpes" />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-info">{author} - {difficulty}</p>
    </div>
  </header>
);

// Je déclare le type de chaque prop, pour pouvoir valider
// => un warning sera affiché dans la console si mauvais type.
Header.propTypes = {
  // nom de la prop: type attendu
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

// export du composant
export default Header;
