import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Login from './components/pages/login';
import SplashScreen from "./components/pages/splashScreen";
import ProtectedRoute from "./components/routes/protectedRoute";
import ItemListing from "./components/pages/itemListing";
import ItemDetail from "./components/pages/itemDetail";

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
          <Route path="/items/:id" element={<ItemDetail/>}></Route>
        </Route>
      </Routes>
    </>
  );
};