import React, { useState } from "react";
import { useDropzone } from "react-dropzone"; // To handle drag-and-drop
import Text from "../text";
import FilePng from "../../../assets/background/file.png";
import Row from "../../../layout/Row";
import Col from "../../../layout/Col";

const FileUpload = ({
  maxSize = 50,
  onFileSelect = () => {},
  buttonText = "Browse Files",
  errorMessage = "File size exceeds the limit",
  title,
  subtitle,
}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  // Convert maxSize from MB to bytes
  const maxFileSize = maxSize * 1024 * 1024;

  // Handling file drop or select
  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];

    if (selectedFile.size > maxFileSize) {
      setError(errorMessage);
      setFile(null);
    } else {
      setError(""); // Clear error message
      setFile(selectedFile);
      onFileSelect(selectedFile); // Call the passed callback with selected file
    }
  };

  // Hook from 'react-dropzone' for drag-and-drop functionality
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: maxFileSize, // Enforces the max size for drag-and-drop
    multiple: false, // Allow only one file to be uploaded
  });

  // Preview for images
  const renderPreview = () => {
    if (file) {
      if (file.type.startsWith("image")) {
        // For image files, display an image preview
        const objectUrl = URL.createObjectURL(file);
        return (
          <div className="mt-4 text-center">
            <img
              src={objectUrl}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <button
                onClick={() => setFile(null)} // Remove the selected file
                className="text-white bg-red-500 px-4 py-2 rounded-md"
              >
                Replace Image
              </button>
            </div>
          </div>
        );
      } else {
        // For other file types, display file name and size
        return (
          <div className="mt-4">
            <h3 className="text-lg text-gray-700">File Selected:</h3>
            <p className="text-gray-600">{file.name}</p>
            <p className="text-sm text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <div className="mt-4">
              <button
                onClick={() => setFile(null)} // Remove the selected file
                className="text-white bg-red-500 px-4 py-2 rounded-md"
              >
                Replace File
              </button>
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div>
      {title && (
        <Text size="base" weight="medium" className="text-[#1D1D22]">
          {title}
        </Text>
      )}
      {title && (
        <Text size="sm" weight="450" color="lightGray">
          {subtitle}
        </Text>
      )}
      <div className="mt-3 mx-auto p-4 border-2 border-dashed border-gray-300 rounded-lg shadow-md">
        {file ? (
          // Show file preview or details
          renderPreview()
        ) : (
          // Show drag-and-drop or browse button if no file selected
          <div
            {...getRootProps()}
            className="cursor-pointer p-8 text-center rounded-lg transition-colors flex flex-col justify-center items-center"
          >
            <img src={FilePng} alt="File" className="w-12 h-12" />
            <Row className="gap-x-2">
              <input {...getInputProps()} />
              <Text size="sm" weight="normal" className="underline">
                {buttonText}
              </Text>

              <Text size="sm" weight="normal" color="lightGray">
                or Drag & Drop your file here
              </Text>
            </Row>
            <Text size="sm" weight="normal" color="lightGray">
              Maximum file size 50 MB
            </Text>
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
