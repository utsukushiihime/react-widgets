import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('algorithms');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  // return results
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="card my-3">
        <div className="card-header">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            {result.title}
          </a>
        </div>
        <div className="card-body">
          {/* use with trusted source only, could be XSS risk */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="form">
        <div className="form-label">Search</div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Search Term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="results">{renderedResults}</div>
    </div>
  );
};

export default Search;

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM
