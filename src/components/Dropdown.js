import React from 'react';
import { Dropdown } from 'react-bootstrap';

const DropdownUI = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <Dropdown.Item
        key={option.value}
        className="dropdown-item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </Dropdown.Item>
    );
  });

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {selected.label}
        </Dropdown.Toggle>

        <Dropdown.Menu>{renderedOptions}</Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownUI;
