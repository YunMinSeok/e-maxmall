import { Suspense, useCallback } from "react";
// react-query
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
// components
import ErrorBoundary from "@components/common/ErrorBoundary";
// type
import { Props } from "@type/common/errorType";

function AsyncWrapper(props: Props) {
  const { children, errorFallback, suspenseFallback } = props;
  const { reset } = useQueryErrorResetBoundary();
  const resetHandler = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ErrorBoundary fallback={errorFallback} onReset={resetHandler}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncWrapper;
