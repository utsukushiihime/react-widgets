import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
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

const App = () => {
  return (
    <main>
      <div className="container mt-5">
        <Search />
        {/* <Accordion items={items} /> */}
      </div>
    </main>
  );
};

export default App;
