import { Navigate, Route, Routes } from "react-router-dom";
import { MathGame } from "./pages/MathGame.layout";

export const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={"maths"} />} />
      <Route path="maths" element={<MathGame />} />
    </Routes>
  );
};
