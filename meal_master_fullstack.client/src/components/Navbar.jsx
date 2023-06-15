import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from '../assets/img/hamburger.svg';
import Login from "./Login.jsx";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-3">
      <Link className="navbar-brand d-flex" to={'/'}>
        <div className="d-flex">
          <img alt="logo" src={logo} height="45" />
          <h1 className="text-danger ms-2 me-3 mb-0">MealMaster</h1>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
        <ul className="navbar-nav me-5">
          <li>
            <Link to={'About'} className="btn text-danger selectable text-uppercase">
              My Meal Plan
            </Link>
          </li>
          <li>
            <Link to={'/About'} className="btn text-danger selectable text-uppercase">
              My Shopping List
            </Link>
          </li>
          <li>
            <Link to={'/FindRecipes'} className="btn text-danger selectable text-uppercase">
              Find Recipes
            </Link>
          </li>
          <li>
            <Link to={'About'} className="btn text-danger selectable text-uppercase">
              About
            </Link>
          </li>
        </ul>
        <Login />
      </div >
    </nav >
  )
}