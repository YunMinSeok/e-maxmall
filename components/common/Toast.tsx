// type
import { ToastProps } from "@type/common/Toast";

// css
import { Container, IconContainer, Message, CloseButton } from "@styles/common/toast";
import { useState } from "react";

const Toast = ({ message, type }: ToastProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // recoil로 변경하자

  function getIcon() {
    if (type === "success") return <Icon.Success />;
    if (type === "warning") return <Icon.Warning />;
    if (type === "error") return <Icon.Error />;
    if (type === "info") return <Icon.Info />;
  }

  return (
    <Container>
      <IconContainer>{getIcon()}</IconContainer>
      <Message>{message}</Message>
      <CloseButton type="button">
        <Icon.Close />
      </CloseButton>
    </Container>
  );
};

export default Toast;
