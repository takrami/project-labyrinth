import styled from "styled-components";

const ButtonContainer = styled.button`
  border: 1px solid #109e5f;
  background-color: #30af77;
  width: 150px;
  padding: 4px;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #d65400;
  }
`;

export { ButtonContainer };
