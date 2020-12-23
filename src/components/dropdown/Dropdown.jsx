import React, { useEffect, useRef } from "react";
import "./Dropdown.css";

const DropDown = ({
  suggestions,
  handleSelection,
  highlightedSuggestion,
  closeDropdown,
}) => {
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick, false);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, false);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }

    // Close the dropdown
    closeDropdown();
  };

  return (
    <ul
      ref={dropdownRef}
      className={`dropdown-menu dropdown-menu-end ${
        suggestions.length > 0 ? "show" : "hide"
      }`}
    >
      {suggestions.map((suggestion, index) => (
        <li
          className={`dropdown-item ${
            highlightedSuggestion === index && "highlight"
          }`}
          key={suggestion}
          onClick={() => handleSelection(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
