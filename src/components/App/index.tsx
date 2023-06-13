import { Route, Routes } from "react-router-dom";

import Profile from "../pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}
