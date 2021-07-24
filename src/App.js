import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
import './App.scss';

// const items = [
//   {
//     title: 'Accordion Item 1',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     title: 'Accordion Item 2',
//     content: 'Lorem ipsum dolor sit amet, this is some more content.',
//   },
//   {
//     title: 'Accordion Item 3',
//     content: 'Lorem ipsum dolor sit amet, this is some more content.',
//   },
// ];

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
    <main>
      <div className="container mt-5">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
        {/* <Search /> */}
        {/* <Accordion items={items} /> */}
      </div>
    </main>
  );
};

export default App;
