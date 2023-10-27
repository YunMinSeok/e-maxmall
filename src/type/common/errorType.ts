import React, { ReactElement } from "react";

export type ErrorFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
};

export type Props = {
  errorFallback: () => React.ReactElement;
  children: ReactElement;
  onReset?: () => void;
  fallback: () => React.ReactElement;
  suspenseFallback: () => React.ReactElement;
};

export type State = {
  hasError: boolean;
  error: Error | null;
};
