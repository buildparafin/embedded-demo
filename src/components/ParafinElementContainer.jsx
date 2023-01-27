
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
// import { ParafinElements } from "@parafin/react-parafin-elements";

// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';


function ParafinElementContainer() {
    const {parafinToken, setParafinToken} = useState(null)

    useEffect(() => {
        async function fetchToken() {
            // hardcoded for now, eventually fetch from url?
            const EXT_BUSINESS_ID = "7ce6f582-950a-46d9-ae5a-339f72daf7d4|34e69d83-38a6-4aa2-9634-b6ac888b0ecf"

            const data = {
                external_business_id: EXT_BUSINESS_ID
            }
            
            // fetch parafin token
            const response = await axios.post('/api/parafin/token', data)
            console.log(response.data);
        }

        fetchToken();
      }, []);

    // useEffect(async () => {
    //     // hardcoded for now, eventually fetch from url?
    //     const EXT_BUSINESS_ID = "7ce6f582-950a-46d9-ae5a-339f72daf7d4|34e69d83-38a6-4aa2-9634-b6ac888b0ecf"

    //     const data = {
    //         external_business_id: EXT_BUSINESS_ID
    //       }
    //     // fetch parafin token
    //     // const response = await axios.post('/api/parafin/token', data)
    //     // console.log(response.data);


    // })


  return (
    <div>
        {/* {parafinToken && (
            <ParafinElements
                token={parafinToken}
                environment="development"
            />
        )} */}
    </div>
  )  

}


export default ParafinElementContainer;