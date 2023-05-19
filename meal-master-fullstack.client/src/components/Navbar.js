import React from "react";
import Login from "./Login.js";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand d-flex" href={''}>
        <div className="d-flex flex-column align-items-center">
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
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto">
          <li>
            <Link href={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              About
            </Link>
          </li>
        </ul>
        <Login />
      </div >
    </nav >
  )
}