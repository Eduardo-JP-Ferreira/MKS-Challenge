import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Products() {
  return (
    <ContainerProducts>
      <ContainerItem>
        <img src={logo} alt="Product Image"></img>
        <h1>Product Name</h1>
        <Price>
          <h1>R$20,00</h1>
        </Price>
      </ContainerItem>

      <ContainerItem>
        <img src={logo} alt="Product Image"></img>
        <h1>Product Name</h1>
        <Price>
          <h1>R$20,00</h1>
        </Price>
      </ContainerItem>
    </ContainerProducts>
  );
}

const ContainerProducts = styled.div`
  background-color: lightcoral;
  width: 80%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

const ContainerItem = styled.div`
  background-color: lightblue;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 5%;
    margin-top: 10px;
  }
  h1 {
    font-size: 23px;
    color: black;
    font-weight: bold;
  }
`;

const Price = styled.div`
  width: 100px;
  height: 40px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  h1 {
    color: white;
  }
`;
