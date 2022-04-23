import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 0px 0px 60px 0px;

  @media (max-width: 1024px) {
    padding: 0px 0px 20px 0px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-content: space-around;
    justify-content: space-between;
    align-items: center;
  }
`;
