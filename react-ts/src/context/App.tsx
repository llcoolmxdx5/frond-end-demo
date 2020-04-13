import React from "react";
import User from "./pages/user/Index";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <div>
      <AppProvider>
        <User />
      </AppProvider>
    </div>
  );
}
