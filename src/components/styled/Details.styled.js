import styled from "styled-components";

export const DetailsDiv = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 500px;
  width: 100%;
  img {
    width: 18rem;
    padding: 1rem 1.5rem;
    margin: 0.7rem;
    margin-right: 3.2rem;
    border-radius: 0.5rem;
    border: 0.01rem dashed #304ffe;
  }
  .info {
    box-shadow: 9px 9px 18px #94aec7, -9px -9px 18px #c8ecff;
    border: 0.01rem dashed #304ffe;
    width: 100%;
    margin: 0.7rem;
    padding: 1.5rem;
    border-radius: 0.7rem;
    a {
      display: flex;
      align-items: center;
      background-color: #304ffe;
      color: #fff;
      border-radius: 0.5rem;
      padding: 0.7rem 0.5rem;
      svg {
        margin-right: 0.7rem;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    span {
      svg {
        color: #304ffe;
        margin-inline-start: 0.7rem;
      }
    }
    h3 {
      color: #304ffe;
      font-size: 1.5rem;
      margin-bottom: 2.5rem;
    }
  }
  .description {
    text-align: justify;
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: 2.2rem;
  }
  .category {
    margin-bottom: 0.7rem;
    display: flex;
    align-items: center;
    svg {
      color: #304ffe;
      margin-inline-start: 0.7rem;
    }
  }
`;
