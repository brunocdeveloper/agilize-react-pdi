import styled from "styled-components";
import { padding, space } from "styled-system";
import Box from "../../components/Box/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const Container: any = styled(Box)`
  background-color: ${({ theme }) => theme.colors.signUp.container};
  box-shadow: 0px 165.572px 132.458px rgba(0, 0, 0, 0.07),
    0px 69.1721px 55.3377px rgba(0, 0, 0, 0.0503198),
    0px 36.9827px 29.5862px rgba(0, 0, 0, 0.0417275),
    0px 20.7322px 16.5858px rgba(0, 0, 0, 0.035),
    0px 11.0107px 8.80858px rgba(0, 0, 0, 0.0282725),
    0px 4.58181px 3.66545px rgba(0, 0, 0, 0.0196802);
  height: ${(props) => props.height || 400}px;
  width: ${(props) => props.width || 400}px;
  margin: 0 auto;
  ${space};
  border: 0.897211px solid ${({ theme }) => theme.colors.signUp.borderContainer};
  border-radius: 13.2458px;
  padding: 0 24px;
  ${padding}
`;

export const StyledLoader = styled(CircularProgress)`
  width: 20px;
  height: 10px;
`;
