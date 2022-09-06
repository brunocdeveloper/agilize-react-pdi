import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  background-color: ${({ theme }) => theme.colors.signUp.container};
  box-shadow: 0px 165.572px 132.458px rgba(0, 0, 0, 0.07),
    0px 69.1721px 55.3377px rgba(0, 0, 0, 0.0503198),
    0px 36.9827px 29.5862px rgba(0, 0, 0, 0.0417275),
    0px 20.7322px 16.5858px rgba(0, 0, 0, 0.035),
    0px 11.0107px 8.80858px rgba(0, 0, 0, 0.0282725),
    0px 4.58181px 3.66545px rgba(0, 0, 0, 0.0196802);
  height: 400px;
  width: 400px;
  margin: 200px auto;
  border: 0.897211px solid #ebecf2;
  border-radius: 13.2458px;
`;
