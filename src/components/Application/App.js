import { Route, Routes } from "react-router-dom";
import { HOME_PAGE_FC } from "../../constants/routs";
import { CalculatorFC } from "../Calculator/CalculatorFC";
import { Header } from "../Header/Header";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Routes>
        <Route path={HOME_PAGE_FC} element={<CalculatorFC />} />
      </Routes>
    </div>
  );
}

export default App;
