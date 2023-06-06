import React from "react";
import Image from 'next/image';
import Link from "next/link";
import Login from "./Login.js";

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-3">
      <Link className="navbar-brand d-flex" href={'/'}>
        <div className="d-flex">
          <Image
            priority
            src="/Images/hamburger.svg"
            className="logo-icon rounded"
            height={40}
            width={40}
            alt=""
          />
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
            <Link href={'About'} className="btn text-danger selectable text-uppercase">
              My Meal Plan
            </Link>
          </li>
          <li>
            <Link href={'/About'} className="btn text-danger selectable text-uppercase">
              My Shopping List
            </Link>
          </li>
          <li>
            <Link href={'/FindRecipes'} className="btn text-danger selectable text-uppercase">
              Find Recipes
            </Link>
          </li>
          <li>
            <Link href={'About'} className="btn text-danger selectable text-uppercase">
              About
            </Link>
          </li>
        </ul>
        <Login />
      </div >
    </nav >
  )
}