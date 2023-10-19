import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  min-height: 30px;
  border-radius: 5px 5px 0px 0px;
  padding: 0.7em;
  background-color: ${({ currentTheme, messageType }) =>
    ToastTheme[currentTheme][messageType].backgroundColor};

  & > svg {
    fill: ${({ currentTheme, messageType }) => ToastTheme[currentTheme][messageType].color};
    margin-right: 0.5em;
  }
`;

export const IconContainer = styled.div`
  & > svg {
  }
`;

export const Message = styled.p``;

export const CloseButton = styled.button``;
