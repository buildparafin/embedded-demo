import React, { useContext, useState } from 'react';
// import { UserContext } from './UserProvider';

function Header() {
  const [showBasic, setShowBasic] = useState(false);
  // const {username, logout} = useContext(UserContext);

  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Financials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Orders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Stores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Help</a>
            </li>
          </ul>

          <span class="navbar-text" style={{color: "white"}}>
            Logout
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header;