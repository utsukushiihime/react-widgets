import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
];

const Translate = () => {
  const [language, setLanguage] = React.useState(options[0]);
  const [text, setText] = useState('');

  return (
    <>
      <div className="form">
        <label htmlFor="enterText" className="form-label">
          Enter Text
        </label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
        />
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      Output
      <Convert text={text} language={language} />
    </>
  );
};

export default Translate;
