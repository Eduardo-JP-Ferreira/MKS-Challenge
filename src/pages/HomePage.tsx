import styled from "styled-components";

export default function HomePage() {
  return (
    <HomeContainer>
      <h1>Ola</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
