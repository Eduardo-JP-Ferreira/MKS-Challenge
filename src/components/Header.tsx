import styled from "styled-components";
import car from "../assets/download.png";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <ContainerHeader>
      <Logo>
        <img src={logo}></img>
        <h1>Max Imports</h1>
      </Logo>

      <Image>
        <img src={car}></img>
      </Image>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  background-color: #126ba5;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Logo = styled.div`
  width: 40%;
  height: 51px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
  h1 {
    font-size: 23px;
    margin-left: 10px;
    color: white;
  }
`;

const Image = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 18px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
