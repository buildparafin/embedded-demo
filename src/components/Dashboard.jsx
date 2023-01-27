
import React, { useContext, useState } from 'react';
// import { UserContext } from "./UserProvider";
import {MDBContainer, MDBCol, MDBBtn} from 'mdb-react-ui-kit';

import { UserContext } from './UserProvider';
import SalesChart from './SalesChart';
import ParafinElementContainer from "./ParafinElementContainer"



function Dashboard() {
  // const {username} = useContext(UserContext);

  return (
    <MDBContainer className="p-3 my-5 mb-9 d-flex flex-column">
      {/* <h3 className='d-flex justify-content-center mb-5'>Welcome, {username}</h3> */}
      <div className='d-flex flex-row'>
        <MDBCol lg='3' className=''>
          <h5>Balance</h5>
          <h3>$54,500.00</h3>
          <MDBBtn className='me-1 w-100'>
            Transfer funds
          </MDBBtn>   
        </MDBCol>
        <MDBCol lg='9' className='ps-5 pe-5'>
          <h3>Financials</h3>
          <ParafinElementContainer />

          <h5 className='mt-5'>Daily Sales</h5>
          <SalesChart />

        </MDBCol>
      </div>
    </MDBContainer>
  )  

}


export default Dashboard;