import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode;
}

export const TestWrapper = () => {
  // ✅ creates a new QueryClient for each test
  const queryClient = new QueryClient()
  return ({ children }: WrapperProps) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

