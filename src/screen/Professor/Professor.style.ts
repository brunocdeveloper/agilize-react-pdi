import styled from "styled-components";
import Text from "../../components/Text/Text";

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;
