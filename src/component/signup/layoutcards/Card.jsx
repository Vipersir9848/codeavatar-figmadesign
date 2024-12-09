import React from "react";
import Col from "../../../layout/Col";
import Text from "../../ui/text";

const Card = ({ imageSrc, countryName, officeLabel, infoLines = [] }) => {
  return (
    <Col
      className="xl:w-[340px] xl:h-[236px] lg:w-[90%] w-full lg:h-full  p-4  bg-opacity-20 rounded-lg shadow-lg 
    border border-opacity-10  backdrop-blur-[42px]  bg-clip-padding backdrop-filter border-gray-50 "
    >
      <Col className="h-full">
        {/* Image */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Flag"
            className="w-[80px] h-[80px] object-contain mb-4"
          />
        )}

        {/* Country Name */}
        {countryName && (
          <Text weight="semibold" size="lg" className="mb-1" color="white">
            {countryName}
          </Text>
        )}

        {/* Office Label */}
        {officeLabel && (
          <Text weight="normal" size="sm" className="mb-2" color="white">
            {officeLabel}
          </Text>
        )}

        {/* Info Lines (Additional Info) */}
        {infoLines.map((line, index) => (
          <Text
            key={index}
            weight="normal"
            size="sm"
            className="mb-1"
            color="white"
          >
            {line}
          </Text>
        ))}
      </Col>
    </Col>
  );
};

export default Card;
