import { HomePage } from "../pages";
import { HomeContainer } from "./HomeContainer";
import { Navigate, Route, Routes } from "react-router-dom";

export const RootContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/games" element={<HomePage />} />
        <Route index element={<Navigate to={"games"} />} />
        <Route path="/games/*" element={<HomeContainer />} />
      </Routes>
    </>
  );
};
