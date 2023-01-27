
import React, { useContext, useState } from 'react';
// import { UserContext } from "./UserProvider";
// import {MDBContainer, MDBCol, MDBBtn} from 'mdb-react-ui-kit';

import { UserContext } from './UserProvider';
import SalesChart from './SalesChart';
import ParafinElementContainer from "./ParafinElementContainer"



function Dashboard() {
  // const {username} = useContext(UserContext);

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col col-3 pe-4'>
          <h5>Balance</h5>
          <h3>$54,500.00</h3>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Transfer Funds</button>
          </div>
        </div>
        <div className="col col-9 ps-4">
          <h3>Financials</h3>
          <ParafinElementContainer />

          <h5 className='mt-5'>Daily Sales</h5>
          <SalesChart />
        </div>
      </div>

    </div>
  )
}


export default Dashboard;