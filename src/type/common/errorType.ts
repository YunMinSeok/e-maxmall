import { ReactElement } from "react";

export type ErrorFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
};

export type ErrorFallbackType = <ErrorType extends Error>(
  props: ErrorFallbackProps<ErrorType>,
  reset: (...args: unknown[]) => void,
) => JSX.Element;

export type Props = {
  errorFallback: ErrorFallbackType;
  children: ReactElement;
  onReset?: () => void;
  fallback: (reset: () => void) => React.ReactElement;
};

export type State = {
  hasError: boolean;
  error: Error | null;
};
