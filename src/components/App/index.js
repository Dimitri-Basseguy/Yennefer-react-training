// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import './app.scss';
/*
- Intégration statique (sans props)
  - découpage de l'interface en composant => tracer des rectangle
  - écriture des colposants sous de div dans App/index.js
  - écriture de chaque composant (nouveau dossier par composant src/components/Header)
  avec fichier index.js et header.scss ou .css)
*/

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div>Ingrédient</div>
    <div>Step</div>
  </div>
);

// == Export
export default App;
