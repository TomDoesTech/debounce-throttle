import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import Debounce from "./pages/Debounce";
import Throttle from "./pages/Throttle";
import Background from "./components/Background";
import { Box } from "@mantine/core";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Box p="lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="debounce" element={<Debounce />} />
          <Route path="throttle" element={<Throttle />} />
        </Routes>
      </BrowserRouter>
      <Background />
    </Box>
  </QueryClientProvider>
);
