import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Login from './components/pages/login';
import SplashScreen from "./components/pages/splashScreen";
import ProtectedRoute from "./components/routes/protectedRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};