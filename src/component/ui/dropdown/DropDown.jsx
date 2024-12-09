import React, { useState, useEffect, useRef } from "react";
import Text from "../text";

const Dropdown = ({ options, onSelect, label, selectedOption,placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle selection from the dropdown
  const handleSelect = (option) => {
    onSelect(option);  // Notify parent about the selection
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <div ref={dropdownRef} className="relative inline-block mb-4">
      {/* Dropdown Button */}
      {label && (
        <Text size="sm" weight="medium" color="lightGray">
          {label}
        </Text>
      )}
      <button
        onClick={toggleDropdown}
        className={`lg:w-[23vw] md:w-[30vw] w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mt-1 text-left flex justify-between items-center ${selectedOption ? "text-black":"text-gray-400"}`}
      >
        {/* If an option is selected, show it; otherwise, show label */}
        {selectedOption ? selectedOption : placeholder}
        
        {/* Dropdown Arrow */}
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transform transition-transform duration-200"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg lg:w-[23vw] md:w-[30vw] w-full max-h-48 overflow-y-auto z-20">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
