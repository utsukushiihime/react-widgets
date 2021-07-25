import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <li
        key={option.value}
        className="dropdown-item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </li>
    );
  });

  return (
    <div className="dropdown">
      <button
        ref={ref}
        onClick={() => setOpen(!open)}
        className={`btn btn-secondary dropdown-toggle ${open ? 'show' : ''}`}
      >
        {selected.label}
      </button>

      <ul className={`dropdown-menu ${open ? 'show' : ''}`}>
        {renderedOptions}
      </ul>
    </div>
  );
};

export default Dropdown;
