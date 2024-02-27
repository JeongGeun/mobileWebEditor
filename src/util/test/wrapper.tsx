import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode;
}

const TestWrapper = () => {
  // ✅ creates a new QueryClient for each test
  const queryClient = new QueryClient();
  const Wrapper = ({ children }: WrapperProps) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  return Wrapper;
}

export default TestWrapper;