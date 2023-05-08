import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { AllProducts } from "../Pages/AllProducts";
import { Login } from "../Pages/Login";
import { SingleProduct } from "../Pages/SingleProduct";
import { Cart } from "../Pages/Cart";
import { SignUp } from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";

export const AllRoutes = ({isOpen, onOpen, onClose,setCurrUser,search}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage search={search} />}></Route>

      <Route path="/allproducts" element={<AllProducts search={search} />}></Route>

      <Route path="/login" element={<Login isOpen = {isOpen} onOpen={onOpen} onClose = {onClose} setCurrUser={setCurrUser}/>}></Route>

      <Route path="/signup" element={<SignUp isOpen = {isOpen} onOpen={onOpen} onClose = {onClose} setCurrUser={setCurrUser}/>}></Route>

      <Route path="/:id" element={<SingleProduct />}></Route>

      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>

    </Routes>
  );
};
