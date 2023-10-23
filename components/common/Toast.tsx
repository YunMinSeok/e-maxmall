import { useState } from "react";
import Image from "next/image";
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
  const [isOpen, setIsOpen] = useState<boolean>(false); //TODO: => recoil로 변경하자

  function getIcon() {
    if (type === "success") return <Image src={Success} />;
    if (type === "warning") return <Image src={Warning} />;
    if (type === "error") return <Image src={Error} />;
    if (type === "info") return <Image src={Info} />;
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
