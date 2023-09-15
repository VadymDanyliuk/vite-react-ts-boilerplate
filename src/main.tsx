import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Root from "./components/Root";
import ProfilePage from "./pages/ProfilePage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </Root>
    </BrowserRouter>
  </React.StrictMode>,
);
