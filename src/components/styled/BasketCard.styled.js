import styled from "styled-components";

export const BasketCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.01rem solid #304ffe;
  box-shadow: 9px 9px 18px #94aec7, -9px -9px 18px #c8ecff;
  padding: 1.2rem;
  margin: 2rem 0;
  border-radius: 0.5rem;
  width: 500px;
  img {
    width: 3.2rem;
    height: 3.2rem;
  }
  .actions{
    display: flex;
    align-items: center;
    span{
        width: 1.2rem;
        text-align: center;
        margin: 0 0.1rem;
    }    
    button{
        background-color: #304ffe;
        color: #fff;
        font-size: 1.3rem;
        height: 1.5rem;
        width: 1.5rem;
        line-height: 1.5rem;
        padding: 0.1rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
  }
`;
