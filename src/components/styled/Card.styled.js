import styled from "styled-components";

export const CardDiv = styled.div`
  width: 270px;
  margin: 0.7rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border: 0.01rem solid #304ffe;
  border-radius: 1.2rem;
  box-shadow: 9px 9px 18px #94aec7, -9px -9px 18px #c8ecff;
  img {
    width: 230px;
    height: 230px;
    padding: 1.2rem;
    margin-bottom: 1.2rem;
  }
  h3 {
    color: #fe5d42;
    font-size: 1.1rem;
  }
  p {
    color: #666;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 1.2rem 0 1.8rem;
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 1.5rem;
      height: 1.4rem;
      color: #304ffe;
      cursor: pointer;
    }
    div {
      display: flex;
      align-items: center;
      span {
        width: 1.2rem;
        text-align: center;
        margin: 0 1.2rem;
      }
      button {
        background-color: #304ffe;
        color: #fff;
        font-size: 1.7rem;
        height: 2rem;
        width: 2rem;
        line-height: 2rem;
        padding: 0.1rem;
        border-radius: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;
