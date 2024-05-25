import styled from "styled-components";

export const SideBarDiv = styled.div`
  box-shadow: 9px 9px 18px #94aec7, -9px -9px 18px #c8ecff;
  width: 200px;
  height: fit-content;
  margin: 0.7rem;
  padding: 1.2rem;
  border-radius: 0.5rem;
  margin-left: 1.8rem;
  outline: 0.01rem solid #304ffe;
  div{
    width: 200px;
    display: flex;
    align-items: center;
    margin-bottom: 0.7rem;
    color: #304ffe;
    font-weight: 500;
  }
  p{
    margin-left: 0.7rem;
  }
  li{
    padding: 0.3rem;
    cursor: pointer;
  }
  .selected{
    background-color: #304ffe;
    color: #fff;
    border-radius: 0.5rem;
  }
`;
