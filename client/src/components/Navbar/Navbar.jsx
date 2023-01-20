import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container-fluid mx-4">
        <Link class="navbar-brand" to="/">
          Buss Rental
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-bold">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="/about"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FLEET
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/action">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/another">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/something">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/rate">
                RATE
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/servcies">
                SERVICES
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
