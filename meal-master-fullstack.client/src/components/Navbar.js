import React from "react";
// import Login from "./Login";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-3">
      <Link className="navbar-brand d-flex" href={''}>
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-dark me-3"><i className="mdi mdi-hamburger"></i> MealMaster</h1>
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
            <Link href={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              My Meal Plan
            </Link>
          </li>
          <li>
            <Link href={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              My Shopping List
            </Link>
          </li>
          <li>
            <Link href={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              Find Recipes
            </Link>
          </li>
          <li>
            <Link href={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              About
            </Link>
          </li>
        </ul>
        {/* <Login /> */}
      </div >
    </nav >
  )
}