import { useState } from "react";
// image
import Error from "@images/icon/error.png";
import Info from "@images/icon/info.png";
import Success from "@images/icon/success.png";
import Warning from "@images/icon/warning.png";
// type
import { ToastProps } from "@type/common/Toast";
// css
import { Container, IconContainer, Message, CloseButton } from "@styles/common/toast";

const Toast = ({ message, type }: ToastProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // recoil로 변경하자

  function getIcon() {
    if (type === "success") return <Success />;
    if (type === "warning") return <Warning />;
    if (type === "error") return <Error />;
    if (type === "info") return <Info />;
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
