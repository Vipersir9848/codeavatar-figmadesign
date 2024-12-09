import React from "react";
import Text from "../text";

// Reusable Input Component
const InputBox = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  type = "text",
  required = false,
  isTextArea = false, // New prop to check if it's a text area
}) => {
  return (
    <div className="mb-4">
      {/* Label */}
      {label && (
        <Text size="sm" weight="medium" color="lightGray">
          {label}
        </Text>
      )}

      {/* Input or TextArea Field */}
      {isTextArea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          name={name}
          className="lg:w-[23vw] md:w-[30vw] w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mt-1 resize-none" // Added `resize-none` to prevent resizing
        />
      ) : (
        <input
        name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="lg:w-[23vw] md:w-[30vw] w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mt-1"
        />
      )}
    </div>
  );
};

export default InputBox;
