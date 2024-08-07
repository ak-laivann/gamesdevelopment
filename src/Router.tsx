import { Navigate, Route, Routes } from "react-router-dom";
import {
  MathGame,
  ReactionTimeTestingPage,
  RockPaperScissorPage,
  CoinTossPage,
} from "./pages";

export const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={"maths"} />} />
      <Route path="maths" element={<MathGame />} />
      <Route path="reaction" element={<ReactionTimeTestingPage />} />
      <Route path="rps" element={<RockPaperScissorPage />} />
      <Route path="toss" element={<CoinTossPage />} />
    </Routes>
  );
};
