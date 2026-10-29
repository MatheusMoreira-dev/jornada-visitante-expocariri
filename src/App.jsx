import { Routes, Route, Navigate } from "react-router";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-background h-dvh w-full relative overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      <Analytics />
    </div>
  );
}

export default App;
