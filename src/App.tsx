import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import { DashboardPage } from "@/features/dashboard/DashboardPage";
import { NetworkPage } from "@/features/network/NetworkPage";
import { TargetDetailPage } from "@/features/targets/TargetDetailPage";
import { ComparisonPage } from "@/features/comparison/ComparisonPage";
import { AlertsPage } from "@/features/alerts/AlertsPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/rede" element={<NetworkPage />} />
            <Route path="/alvo/:id" element={<TargetDetailPage />} />
            <Route path="/comparador" element={<ComparisonPage />} />
            <Route path="/alertas" element={<AlertsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
