import React, { useState } from "react";
import Text from "../../ui/text";
import Col from "../../../layout/Col";
import InputBox from "../../ui/inputbox/InputBox";
import Row from "../../../layout/Row";
import Dropdown from "../../ui/dropdown/DropDown";
import FileUpload from "../../ui/fileupload/FileUpload";

const Form = () => {
  // Initialize the form data state with empty values
  const [formData, setFormData] = useState({
    name: "",
    doingBusinessAs: "",
    companyRegNumber: "",
    randomRegNumber: "",
    websiteURL: "",
    randomCount: "",
    totalVisits: "",
    contactEmail: "",
    purposeOfForm: "",
    description: "",
  });

  // State to hold selected options for dropdowns
  const [selectedOptions, setSelectedOptions] = useState([null, null, null, null, null]);

  // File state for each file input
  const [files, setFiles] = useState({
    incorporationCertificate: null,
    companyLogo: null,
  });

  // Function to handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field in the form data
    }));
  };

  // Function to handle selection for any dropdown
  const handleDropdownSelect = (index, selectedOption) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = selectedOption;
    setSelectedOptions(newSelectedOptions); // Update the selected option for the specific dropdown
  };

  // File handler function
  const handleFileSelect = (fileType, file) => {
    setFiles((prevState) => ({
      ...prevState,
      [fileType]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted with files:", files);
    console.log("Form data:", formData);
    console.log("Selected options:", selectedOptions);
  };

  return (
    <div className="lg:my-20 md:my-10 lg:w-[70%] w-[90vw] md:w-full  m-auto">
      <Col className="gap-y-1">
        <Text size="lg" weight="550" className="sm:text-xl">
          Tell us more about your business
        </Text>
        <Text size="sm" weight="450" color="lightGray" className="sm:text-base">
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </Text>
      </Col>

      <form onSubmit={handleSubmit}>
        <Col className="gap-y-2 mt-4">
          <div className="flex justify-between md:flex-row flex-col">
            <InputBox
              label="Legal Name *"
              name="name"  // Ensure correct name attribute for input
              value={formData.name} // Bind state
              onChange={handleInputChange} // Update state on input change
              placeholder="Legal Name *"
              required
              className="w-full"
            />
            <InputBox
              label="Doing business as *"
              name="doingBusinessAs"
              value={formData.doingBusinessAs}
              onChange={handleInputChange}
              placeholder="Doing business as"
              required
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <InputBox
              label="Company Registration Number *"
              name="companyRegNumber"
              value={formData.companyRegNumber}
              onChange={handleInputChange}
              placeholder="Company Registration Number *"
              required
              className="w-full"
            />
            <InputBox
              label="Random Registration Number *"
              name="randomRegNumber"
              value={formData.randomRegNumber}
              onChange={handleInputChange}
              placeholder="Random Registration Number *"
              required
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <InputBox
              label="Website URL *"
              name="websiteURL"
              value={formData.websiteURL}
              onChange={handleInputChange}
              placeholder="Website URL *"
              required
              className="w-full"
            />
            <Dropdown
              options={["Option 1", "Option 2", "Option 3", "Option 4"]}
              onSelect={(option) => handleDropdownSelect(0, option)}
              placeholder="Select an option"
              label="Industry Name *"
              selectedOption={selectedOptions[0]}
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <Dropdown
              options={["Option 1", "Option 2", "Option 3", "Option 4"]}
              onSelect={(option) => handleDropdownSelect(1, option)}
              placeholder="Options nai options"
              label="One Random Dropdown? *"
              selectedOption={selectedOptions[1]}
            />
            <Dropdown
              options={["Option 1", "Option 2", "Option 3", "Option 4"]}
              onSelect={(option) => handleDropdownSelect(2, option)}
              label="Which dropdown would you like to select? *"
              placeholder="More Options"
              selectedOption={selectedOptions[2]}
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <Dropdown
              options={["Option 1", "Option 2", "Option 3", "Option 4"]}
              onSelect={(option) => handleDropdownSelect(3, option)}
              placeholder="Return of the options"
              label="Another Random Dropdown Appears *"
              selectedOption={selectedOptions[3]}
            />
            <Dropdown
              options={["Option 1", "Option 2", "Option 3", "Option 4"]}
              onSelect={(option) => handleDropdownSelect(4, option)}
              label="Account Usage Intent *"
              placeholder="Account Usage Intent"
              selectedOption={selectedOptions[4]}
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <InputBox
              label="Random count per month *"
              name="randomCount"
              value={formData.randomCount}
              onChange={handleInputChange}
              placeholder="Put the value get the answer"
              required
              className="w-full"
            />
            <InputBox
              label="Expected total visits in this page *"
              name="totalVisits"
              value={formData.totalVisits}
              onChange={handleInputChange}
              placeholder="In Number"
              required
            />
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <InputBox
              label="Purpose of using fake form *"
              name="purposeOfForm"
              value={formData.purposeOfForm}
              onChange={handleInputChange}
              placeholder="Purpose of using fake form *"
              required={true}
              isTextArea={true}
            />

            <InputBox
              label="Ek description toh banta hai *"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              required={true}
              isTextArea={true}
            />
          </div>

          <InputBox
            label="Contact Email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleInputChange}
            placeholder="Contact Email"
            required={true}
          />

          <Col className="gap-y-10 mt-3">
            <FileUpload
              maxSize={50} // Max size 50 MB
              onFileSelect={(file) => handleFileSelect('incorporationCertificate', file)}
              buttonText="Click to Upload"
              errorMessage="File exceeds the 50 MB limit"
              title="Certification of Incorporation *"
              subtitle="Upload the incorporation certificate"
            />
            <FileUpload
              maxSize={50}
              onFileSelect={(file) => handleFileSelect('companyLogo', file)}
              buttonText="Click to Upload"
              errorMessage="File exceeds the 50 MB limit"
              title="Company Logo *"
              subtitle="Upload the company logo"
            />
          </Col>
        </Col>
      </form>
    </div>
  );
};

export default Form;
