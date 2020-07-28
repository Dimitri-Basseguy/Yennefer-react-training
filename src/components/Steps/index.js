// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './step.scss';

// Je veux transformer steps => pour chaque éléments je veux un <li>
const Steps = ({ steps }) => (
  <ol className="steps">
    {steps.map((step) => (
      <li key={step.toString()} className="step">{step}</li>
    ))}
  </ol>
);

// Validation des props
Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// export du composant
export default Steps;
