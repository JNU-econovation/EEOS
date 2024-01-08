"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Provider = ({ children }: PropsWithChildren<{}>) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="light"
        pauseOnFocusLoss={false}
      />
      {children}
    </QueryClientProvider>
  );
};

export default Provider;
