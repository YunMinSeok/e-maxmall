import { Component } from "react";

import { Props, State, ErrorFallbackProps } from "@type/common/errorType";

const initialState = { hasError: false, error: null };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  resetQuery = () => {
    const { onReset } = this.props;
    onReset?.();
    this.setState(initialState);
  };

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    const isErrExist = hasError && error !== null;
    const fallbacKUI = (err: ErrorFallbackProps["error"]) => <div>{String(err)}</div>;
    if (isErrExist) return fallbacKUI(error);
    return children;
  }
}

export default ErrorBoundary;
