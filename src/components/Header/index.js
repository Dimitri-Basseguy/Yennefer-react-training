// == Import npm
import React from 'react';

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
const Header = () => (
  <header className="header">
    <img className="header-image" src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="crêpes" />
    <div className="header-content">
      <h1 className="header-title">Crêpes raffinées</h1>
      <p className="header-info">John Deuf - Facile</p>
    </div>
  </header>
);

// export du composant
export default Header;
