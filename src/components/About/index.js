import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="14">
          <h2>About Me!</h2>
          <hr class="solid bg-dark" />
          <p style={{ fontSize: "20px" }}>
            Hi, my name is Andy Nguyen and I am currently a student at
            University of California of San Diego Extension for a Full Stack Web Development
            Bootcamp Program. I am currently a CNC Machinist and live in
            San Diego, California. On my free time I like to go 
            fishing and hang out with my pets.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
