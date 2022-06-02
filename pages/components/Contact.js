import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleComponent from "./Particles";
import { Button } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

const ContactPage = () => {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Container
      style={{
        marginTop: "7rem",
        background: "black",
        padding: "35px",
        color: "white",
        borderRadius: "15px",
      }}
    >
      <h1>About me</h1>
      <ParticleComponent />
      <Row>
        <Col md={6}>
          <h4>My work</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            exercitationem eaque fugit, dignissimos laboriosam tenetur sequi, id
            eveniet ab vel rem similique iure inventore accusantium tempora
            expedita laborum. Id, officia? Aut aperiam mollitia odio ipsam
            accusantium non iure sapiente pariatur totam eius id quam similique
            nulla sed exercitationem dolorem sit neque deserunt quod facere,
            debitis eveniet tempore quasi repellendus? Mollitia!
          </p>
          <Button color="gradient" onClick={handleClick(TransitionRight)}>
            Request for join
          </Button>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message="Soon we will add you in our community"
            key={state.Transition.name}
            style={{
              borderRadius: "20rem",
            }}
          />
        </Col>
        <Col md={6}>
          <Container>
            <img
              src="https://alanwalker.com/wp-content/themes/alanwalker/assets/images/about.png"
              alt="alan walker image"
              style={{
                marginTop: "-35%",
                objectFit: "cover",
                borderRadius: "25px",
                zIndex: "1",
              }}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
