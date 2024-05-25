import styled from "styled-components";

export const BasketSideBarDiv = styled.div`
  width: 300px;
  margin-right: 1.8rem;
  border: 0.01rem dashed #304ffe;
  border-radius: 1.8rem;
  padding: 1.2rem;
  box-shadow: 9px 9px 18px #94aec7, -9px -9px 18px #c8ecff;
  div{
    color: #304ffe;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    svg{
        font-size: 1.3rem;
        margin-right: 0.4rem;
    }
    span{
        margin-left: 0.5rem;
    }
  }
  button{
    width: 100%;
    background-color: #304ffe;
    outline: 0.1rem solid #304ffe;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    &:hover{
        outline-style: dashed;
        background-color: transparent;
        color: #304ffe;
    }
  }
`;
