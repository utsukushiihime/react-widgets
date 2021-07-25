import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

import './App.scss';

const items = [
  {
    title: 'Accordion Item 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Accordion Item 2',
    content: 'Lorem ipsum dolor sit amet, this is some more content.',
  },
  {
    title: 'Accordion Item 3',
    content: 'Lorem ipsum dolor sit amet, this is some more content.',
  },
];

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
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <Header />
      <main>
        <div className="container-md mt-5">
          <div className="row">
            <div className="col-6">
              <Route path="/">
                <Accordion items={items} />
              </Route>
              <Route path="/list">
                <Search />
              </Route>
              <Route path="/dropdown">
                <Dropdown
                  label="Select a color"
                  options={options}
                  selected={selected}
                  onSelectedChange={setSelected}
                />
              </Route>
              <Route path="/translate">
                <Translate />
              </Route>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
