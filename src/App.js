import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Login from './components/pages/login';
import SplashScreen from "./components/pages/splashScreen";
import ProtectedRoute from "./components/routes/protectedRoute";
import ItemListing from "./components/pages/itemListing";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/items" element={<ProtectedRoute />}>
          <Route path="/items" element={<ItemListing/>}></Route>
        </Route>
      </Routes>
    </>
  );
};