import styled from "styled-components";

export const HeaderDiv = styled.div`
  box-shadow: 9px 9px 18px #94aec7, -9px -9px 18px #c8ecff;
  color: #304ffe;
  padding: 0.5rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  div{
    font-size: 1.6rem;
    background-color: #304ffe;
    text-align: center;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 0.5rem;
    position: relative;
    a{
      color: #fff;
      span{
        position: absolute;
        font-size: 0.9rem;
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        background-color: #fe5d42;
        color: #fff;
        border-radius: 50%;
        top: -10px;
        right: -10px;
      }
    }
  }
`;
