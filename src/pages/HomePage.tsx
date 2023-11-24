import styled from "styled-components";
import Header from "../components/Header";
import Products from "../components/Products";

export default function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Products />
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
