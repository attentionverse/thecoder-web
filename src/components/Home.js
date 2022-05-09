import React from "react";
import styled from "styled-components";
import Section from "./Section";
import DevSection from "./DevSection"
import MVPSection from "./MVP";
import CaseStudySection from "./CaseStudy";


function Home() {
  return (
    <Container>
      <DevSection
       title=" Your Dev Team"
       // description="Order Online for Touchless Delivery"
       backgroundImage="your-dev-background.jpeg"
       leftButtonText="Custom Order"
       rightButtonText="Existing Inventory"
       showDownArrow
      />
      <MVPSection
       title=" MVP in 2 Weeks"
       // description="Order Online for Touchless Delivery"
       backgroundImage="model-3.jpg"
       showDownArrow
      />
      <CaseStudySection
      title="Case Studies"
      description="Order Online for Touchless Delivery"
      backgroundImage="model-3.jpg"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
       />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftButtonText="Shop Now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
