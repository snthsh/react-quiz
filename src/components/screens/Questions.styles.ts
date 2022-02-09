import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  /* min-height: 258px; */
  background: white;
  border: 1px solid #e5f4ff;
  h1 {
    font-size: 1.625rem;
    margin: 20px 25px 30px 25px;
  }
  h3 {
    font-size: 0.8rem;
    margin: 40px 25px 20px 25px;
  }
  > p {
    padding: 15px 25px;
    background: #fcfdff;
    border: 1px solid #e5f4ff;
  }
  button {
    width: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  button {
    background: white;
    padding: 20px;
    border: none;
    color: #2599fb;
    cursor: pointer;
  }
`;
