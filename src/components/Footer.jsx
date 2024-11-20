import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Footer = () => {
  return (
    <Container>
      <h1>Footer</h1>
    </Container>
  );
};

export default Footer;