import "@/App.scss";
import { useState } from "react";
import reactLogo from "@assets/react.svg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FreeModeCarousel from "@components/FreeModeCarousel";
import DataMobileListProvider from "@components/DataMobileListProvider";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: Title as a system design */}
      <DataMobileListProvider>
        {(status, data, error) => (
          <> 
            {status === 'pending' && <p>Loading carousel section...</p>}
            {status === 'error' && <span>Error: {error.message}</span>}
            {status === 'success' && <FreeModeCarousel data={data} />}
          </>
        )}
        
      </DataMobileListProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
