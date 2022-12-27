import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, My name is Anita, <br /> Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I’m a Frontend Developer with 3yrs of experience in working with Typescript, Git, CSS, SASS and Javascript frameworks such as React and Next in building web applications and consuming backend API. Contributing to teams success with agile
          methodology and grasping new concepts quickly are two of my biggest strengths. i am a critical thinker and a good communicator, who is eager to learn new things and overcome new challenges.
        </SectionText>
        <Button onClick={() => (window.location = "https://mail.google.com/mail/u/0/#inbox")}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
