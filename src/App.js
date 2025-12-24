import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
           <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;