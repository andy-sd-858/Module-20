import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Info!</h2>
          <hr class="solid bg-dark" />
          <h4>
            I have linked my e-mail and cell phone number.
            Please feel free to contact me at any time and if I do not
            immediately respond I will respond within 48 hours. Thanks!
          </h4>
          <hr className="hr-light w-26" />
          <h3>Cell Phone #</h3>
          <hr className="hr-dark w-26" />
          <a href="tel:999-999-9999">
            <MDBIcon icon="phone-alt" /> 999-999-999
          </a>
          <hr className="hr-light w-26" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-26" />
          <a href="mailto:andy.sd.858@gmail.com">
            <MDBIcon icon="envelope" /> andy.sd.858@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
