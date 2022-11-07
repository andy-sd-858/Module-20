import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardBody,
} from "mdbreact";

const Projects = () => {
  return (
    
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              A Random Password Generator
            </MDBCardText>
            <MDBBtn
              href="https://andy-sd-858.github.io/Module-3-Random-Password-Generator/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View App
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardBody>
            <MDBCardTitle tag="h5">Pet Page!</MDBCardTitle>
            <MDBCardText>
              A webpage to adopt your next pet!
            </MDBCardText>
            <MDBBtn
              href="https://andy-sd-858.github.io/Project-1/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View App
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "250px" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/andy-sd-858/Work-Day-Scheduler/main/ScreenShot.PNG"
            alt="WorkDay"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Work Day Scheduler</MDBCardTitle>
            <MDBCardText>
              A simple app used to help organize your work day.
            </MDBCardText>
            <MDBBtn
              href="https://andy-sd-858.github.io/Work-Day-Scheduler/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View App
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather App</MDBCardTitle>
            <MDBCardText>
              Get your weather reports!
            </MDBCardText>
            <MDBBtn
              href="https://andy-sd-858.github.io/Weather-App/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View App
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
            <MDBCardText>
              This Webpage helps you take notes
            </MDBCardText>
            <MDBBtn
              href="https://module-11-notetaker.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View App
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
