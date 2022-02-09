import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e8f4fe;
  h1 {
    font-size: 1.625rem;
    margin-top: 90px;
  }
  h3 {
    font-size: 0.8rem;
    margin: 40px 25px 20px 25px;
  }
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul > li {
    width: 100%;
    background: green;
  }
  ul > li > a {
    text-decoration: none;
    background: #fcfdff;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #53adfc;
    border: 1px solid #e8f4fe;
  }
`;
