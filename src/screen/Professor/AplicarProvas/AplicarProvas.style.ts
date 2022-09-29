import styled from "styled-components";
import Box from "../../../components/Box/Box";
import Text from "../../../components/Text/Text";

export const StyledText = styled(Text)`
  cursor: pointer;
`;

export const StyledContainer = styled(Box)`
  margin-top: 50px;

  @media (max-width: 902px) {
    justify-content: space-between;
    height: 1550px;
    flex-direction: column;
  }
`;
