/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';

const Dropdown = (options, current) => {
  const history = useHistory();

  const handleClick = (id) => {
    if (current.value !== id) {
      history.push(`/shop/${id}`);
    }
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: '.75rem 1.2rem',
      lineHeight: 'inherit',
      transition: 'all .05s ease-in-out',
      fontSize: '1.1rem',
      color: state.isSelected ? '#ffffff' : '#2d2d2d',
      backgroundColor: state.isSelected ? '#2d2d2d' : '#ffffff',
      fontWeight: 400,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#2d2d2d',
        color: '#ffffff',
      },
    }),
    control: () => ({
      display: 'flex',
      width: 277,
      background: '#ffffff',
      border: '2px solid #2d2d2d',
      fontSize: '1.1rem',
      color: '#2d2d2d',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#2d2d2d',
      fontWeight: 500,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
      transition: 'all .15s ease-in-out',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '2.8px 19.2px',
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
    }),
  };

  return (
    <Select
      defaultValue={current}
      options={options}
      className="dropdown"
      styles={customStyles}
      onChange={(value) => handleClick(value.value)}
      isSearchable={false}
    />
  );
};

export default Dropdown;
