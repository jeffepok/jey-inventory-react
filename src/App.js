import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Login from './components/pages/login';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}