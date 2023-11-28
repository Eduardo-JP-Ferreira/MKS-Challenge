import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Products() {
  return (
    <ContainerProducts>
      <ContainerItem>
        <img src={logo} alt="Product Image"></img>
        <h1>sdasdasdasdasdasda sdasd asdaSAsA SASsdadasd</h1>
        <Price>
          <h2>R$20,00</h2>
        </Price>
      </ContainerItem>

      <ContainerItem>
        <img src={logo} alt="Product Image"></img>
        <h1>Product Name asdasdasdasdas dasdasd asd asda asdasdasd</h1>
        <Price>
          <h2>R$2000,00</h2>
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
  height: 260px;
  max-width: 200px;
  max-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 180px;
    height: 130px;
    border-radius: 5%;
    margin-top: 10px;
  }
  h1 {
    font-size: 20px;
    color: black;
    max-width: 90%;
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
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

  h2 {
    color: white;
    font-size: 1vw;
  }
`;
