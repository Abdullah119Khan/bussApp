import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container-fluid mx-4">
        <Link class="navbar-brand fw-bold" to="/">
          ROYAL CROWN
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mr-5 font-bold">
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
                to="/fleet"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FLEET
              </Link>
              <ul class="dropdown-menu py-2">
                <li>
                  <Link class="dropdown-item" to="/7seater">
                    7 Seater Car Rental
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/14seater">
                    14 Seater Hiace Van
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/18seater">
                    18 Seater Sprinter Luxury Van
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/22seater">
                    22 Seater Coaster Van
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/30seater">
                    30 Seater Bus Rental
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/33seater">
                    33 Seater Luxury Bus
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/35seater">
                    35 Seater Luxury Bus
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/50seater">
                    50 Seater Luxury Bus
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/rate">
                RATE
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
                SERVICES
              </Link>
              <ul class="dropdown-menu py-2">
                <li>
                  <Link class="dropdown-item" to="/citytour">
                    City Tour
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/corporate">
                    Corporate Transportation
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/">
                    Luxury Bus Rental
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/dubaiairporttransfer">
                    Dubai Airport Transfer
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/attractionindubai">
                    Attraction In Dubai
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/schoolbus">
                    School Bus Rental Service
                  </Link>
                </li>
              </ul>
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
