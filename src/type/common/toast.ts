// toast message type
export type MessageType = "success" | "warning" | "error" | "info";

// toast ui props type
export interface ToastProps {
  message: string;
  type: MessageType;
}
