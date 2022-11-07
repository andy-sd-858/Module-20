import React from "react";
import {MDBContainer, MDBCol, MDBRow} from "mdbreact";
import Resume from "../assets/Andy-Nguyen.pdf";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-6">
      <MDBRow>
        <MDBCol md="12">
          <embed id="Resume" src={Resume} width="100%" height="800px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
