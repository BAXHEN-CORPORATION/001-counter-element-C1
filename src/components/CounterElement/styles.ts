import styled, { Keyframes } from "styled-components";

interface IRoot {
  animation?: Keyframes;
}

export const Root = styled.div<IRoot>`
  animation: ${(props) => props.animation || "none"};
  animation-duration: 1s;

  padding: 15px;
  color: #77838f;
`;
export const CounterWrapper = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: 500;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
export const Counter = styled.div``;
export const CounterTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #696969;
  text-align: center;
`;
export const Prefix = styled.span`
  flex-grow: 1;
  text-align: right;
`;
export const Suffix = styled.span`
  flex-grow: 1;
  text-align: left;
`;
