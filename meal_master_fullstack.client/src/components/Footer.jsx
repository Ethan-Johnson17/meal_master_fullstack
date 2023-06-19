import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="row footer bg-white text-dark mt-3">
      <div className="col-12 text-center mt-3">
        <ul className="d-flex me-5 text-center justify-content-center footerList">
          <li>
            <Link to={'About'} className="btn text-danger selectable text-uppercase footerFont">
              My Account
            </Link>
          </li>
          <li>
            <Link to={'About'} className="btn text-danger selectable text-uppercase footerFont">
              Contact
            </Link>
          </li>
          <li>
            <Link to={'About'} className="btn text-danger selectable text-uppercase footerFont">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}