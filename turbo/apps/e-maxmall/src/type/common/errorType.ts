import { ReactElement, ReactNode } from "react";

export type ErrorFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
};

export type Props = {
  errorFallback?: (err: ErrorFallbackProps["error"]) => ReactElement;
  children?: ReactElement;
  onReset?: () => void;
  fallback?: (err: ErrorFallbackProps["error"]) => ReactElement | null;
  suspenseFallback?: ReactElement;
};

export type State = {
  hasError: boolean;
  error: Error | null;
};
