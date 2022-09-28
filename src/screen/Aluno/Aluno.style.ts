import styled, { css } from "styled-components";
import Text from "../../components/Text/Text";

export const StyledText = styled(Text)<{ selected?: boolean }>`
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }

  ${({ selected }) =>
    selected &&
    css`
      opacity: 0.5;
    `}
`;
