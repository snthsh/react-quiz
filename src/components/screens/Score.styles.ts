import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 400px;
  width: 400px;
  background: white;
  align-items: center;
  border: 1px solid #e5f4ff;
  text-align: center;
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
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul > li {
    width: 100%;
    display: flex;
    text-decoration: none;
    background: #fcfdff;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #53adfc;
    border: 1px solid #e8f4fe;
    flex-direction: row;
  }
  ul > li > span {
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 50%;
  }
  button {
    display: inline-flex;
    flex-direction: row;
    width: 100%;
    background: white;
    padding: 20px;
    border: none;
    color: #2599fb;
    cursor: pointer;
    justify-content: center;
  }
`;
