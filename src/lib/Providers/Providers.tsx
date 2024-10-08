"use client";

import { ThemeProvider } from "@mui/material";
// import { theme } from "@/lib/theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
import { theme } from "../Theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
