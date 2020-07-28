// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';
import './app.scss';

// Import Data
import data from 'src/data/recipe';

/*
- Intégration statique (sans props)
  - découpage de l'interface en composant => tracer des rectangle
  - écriture des colposants sous de div dans App/index.js
  - écriture de chaque composant (nouveau dossier par composant src/components/Header)
  avec fichier index.js et header.scss ou .css)

- Dynamisation (utilisation des données; appel à une API, ...)
*/

// == Composant
const App = () => {
  console.log(data.ingredients);

  return (
    <div className="app">
      <Header
        title={data.title}
        author={data.author}
        difficulty={data.difficulty}
        thumbnail={data.thumbnail}
      />
      <Ingredients ingredients={data.ingredients} />
      <Steps />
    </div>
  );
};

// == Export
export default App;
