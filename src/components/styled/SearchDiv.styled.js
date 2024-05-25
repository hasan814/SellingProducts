import styled from "styled-components";

export const SearchDiv = styled.div`
  box-shadow: 9px 9px 18px #94aec7, -9px -9px 18px #c8ecff;
  margin: 2rem 3.2rem;
  width: fit-content;
  padding: 0.7rem 1rem;
  background: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    outline: 0.1rem solid #304ffe;
    padding: 0.7rem;
    width: 300px;
    height: 2.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    color: #304ffe;
    &:focus {
      outline-style: dashed;
    }
  }
  button {
    outline: 0.1rem solid #304ffe;
    margin-left: 0.1rem;
    height: 2.5rem;
    width: 2rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    &:hover{
        outline-style: dashed;
    }
  }
`;
