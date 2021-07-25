import React from 'react';
import Translate from './components/Translate';
import './App.scss';

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
];

const App = () => {
  return (
    <main>
      <div className="container-md mt-5">
        <div className="position-relative">
          <div className="position-absolute top-0 start-50 translate-middle-x">
            <Translate />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
