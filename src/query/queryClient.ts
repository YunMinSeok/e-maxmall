import { QueryClient, DefaultOptions } from "@tanstack/react-query";

function queryErrorHandler(error: unknown): void {
  const title = error instanceof Error ? error.message : "error connecting to server";
  console.error(title);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
} as { defaultOptions: DefaultOptions });
