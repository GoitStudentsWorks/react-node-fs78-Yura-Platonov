import styled from '@emotion/styled';

export const Container = styled.div`
 box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px 52px;
  background-color: #F7F6F9; //delete later
  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px 42px;
  }
  @media screen and (min-width: 1440px) {
    width: 1151px;
    padding: 0 32px 32px 32px;
    margin: 0;
  }
`;
