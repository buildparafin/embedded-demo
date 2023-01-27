
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { ParafinElements } from "@parafin/react-parafin-elements";



function ParafinElementContainer() {
    const [parafinToken, setParafinToken] = useState(null)

    useEffect(() => {
        async function fetchToken() {
            // hardcoded for now, eventually fetch from url?
            const EXT_BUSINESS_ID = "MyFriedChicken"

            const data = {
                external_business_id: EXT_BUSINESS_ID
            }
            
            // fetch parafin token
            const response = await axios.post('/api/parafin/token', data)
            console.log(response.data);
            setParafinToken(response.data.authToken)
        }

        fetchToken();
      }, []);

  return (
    <div>

      {parafinToken ? (
        <ParafinElements
          token={parafinToken}
          environment="development"
        />
      ) : (
        <div class="spinner-border mt-3" role="status">
          <span class="sr-only"></span>
        </div>
      )}
    </div>
  )  

}


export default ParafinElementContainer;