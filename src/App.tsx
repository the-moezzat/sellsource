import LandingPage from "./pages/LandingPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative mx-auto max-w-[1480px]">
        <LandingPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
