import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiKey from './../apiKey';

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebounceText] = useState(text);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebounceText(text);
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: apiKey, // GOOGLE TRANSLATION API KEY
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <>
      <h1>{translated}</h1>
    </>
  );
};

export default Convert;
