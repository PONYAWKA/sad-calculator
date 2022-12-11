import { Route, Routes } from "react-router-dom";
import { HOME_PAGE_FC } from "../../../constants/routs";
import { Calculator } from "../Calculator/Calculator";

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE_FC} element={<Calculator />} />
    </Routes>
  );
}

export default App;
