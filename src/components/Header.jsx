import React, { useContext, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
// import { UserContext } from './UserProvider';

function Header() {
  const [showBasic, setShowBasic] = useState(false);
  // const {username, logout} = useContext(UserContext);

  return (
    <MDBNavbar expand='lg' dark bgColor='primary'>
      <MDBContainer>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        {/* only include if you build in user auth / login support */}
        {/* {username && ( */}

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>            
              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Financials
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#'>
                  Orders
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#'>
                  Stores
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#'>
                  Help
                </MDBNavbarLink>
              </MDBNavbarItem>


              <MDBNavbarItem className="ms-auto">
                {/* <MDBNavbarLink active href='#' onClick={logout} tabIndex={-1}> */}
                <MDBNavbarLink active href='#' tabIndex={-1}>
                  Logout
                </MDBNavbarLink>
              </MDBNavbarItem>              
            </MDBNavbarNav>
          </MDBCollapse>
        {/* )} */}
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;