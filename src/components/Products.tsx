import styled from "styled-components";

export default function Products() {
  return <ContainerProducts></ContainerProducts>;
}

const ContainerProducts = styled.div`
  background-color: lightcoral;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
