import React from "react";
import BackgroundImage from "../../../assets/background/background.png";
import BackgroundBlur from "../../../assets/background/blur-bg.png";
import BackgroundBlur2 from "../../../assets/background/blur-bg2.png";
import Card from "./Card";
import HKFlag from "../../../assets/flags/hk.png";
import SPFlag from "../../../assets/flags/singapore.png";
import USFlag from "../../../assets/flags/us.png";
import Col from "../../../layout/Col";
import Text from "../../ui/text";

const LayoutCards = () => {
  return (
    <div className="bg-[#696969] h-full w-full relative sm:flex hidden justify-center items-center overflow-hidden">
      <div className="absolute top-10 left-10 cursor-pointer z-50">
        <Text size="base" weight="semibold" color="white">
          Back
        </Text>
      </div>
      <Col className="absolute z-20 gap-y-12" align="center">
        <Card
          imageSrc={SPFlag}
          countryName="Singapore"
          officeLabel="Head office"
          infoLines={["Xyz", "Road to now where", "Error"]}
        />

        <div className="flex gap-x-20 gap-y-12 xl:flex-row flex-col">
          <Card
            imageSrc={HKFlag}
            countryName="Hong Kong"
            officeLabel="Branches"
            infoLines={[
              "Xyz",
              "The infinite Loop Office, 404 Timeout",
              "Plaza",
            ]}
          />
          <Card
            imageSrc={USFlag}
            countryName="USA"
            officeLabel="Branches"
            infoLines={["Xyz", "Road to now where", "Error"]}
          />
        </div>
      </Col>

      <img
        src={BackgroundImage}
        alt="Background image"
        className="absolute left-0 bottom-0 z-10"
      />
      <img
        src={BackgroundBlur}
        alt="Blur image"
        className="absolute bottom-0"
      />
      <img
        src={BackgroundBlur2}
        alt="Blur image"
        className="absolute bottom-0"
      />
    </div>
  );
};

export default LayoutCards;
