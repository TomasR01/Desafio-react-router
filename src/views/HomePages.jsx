import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className=" text-center">
      <h1 className="pt-5">
        Bienvenido a <strong>Happy Cake</strong>
      </h1>
      <br />
      <h5>El lugar de los pasteles felices</h5>
      <br />
      <p style={{ fontSize: "6rem" }}>🎂</p>
    </Container>
  );
};

export default Home;
