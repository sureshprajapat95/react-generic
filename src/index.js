import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import App from "./App";
import AddUser from "./pages/AddUser";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthContextProvider } from "./store/auth-context";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="add-user" element={
            <PrivateRoute>
              <AddUser />
            </PrivateRoute>
            }
            />
      </Routes>
      <App />
      <ToastContainer closeOnClick={false} closeButton={false} />
    </AuthContextProvider>
  </BrowserRouter>
);
