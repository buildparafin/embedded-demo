import { useEffect, useState, useCallback } from "react";
import axios from 'axios'
import { ParafinElements } from "@parafin/react-parafin-elements";


function App() {
  const [token, setToken] = useState(null)
  const [state, setState] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      
    /** Note: You must grab a business Id to pass to the "/parafin/token" endpoint
        If you don't have a business yet, create a new test business with
        the curl command below.
    
        curl -XPOST  https://api.parafin.com/business \
          -u you_client_id:you_client_secret \
          -d '{ 
            "business_external_id": "mikesCerealShack", 
            "product_type": "flex_loan",
            "owner_first_name": "Michael",
            "owner_last_name": "Scott",
            "legal_business_name": "Mikes Cereal Shack llc",
            "dba_name": "Mikes Cereal Shack",
            "email": "mikescott@test.com"         
          }'                 
     *
     **/
      const businessId = "mikesCerealShack21"
      
      // fetch Parafin token from server
      const response = await axios.get(`/parafin/token/${businessId}`) 
      setToken(response.data.token)
    }

    if(!token) {
      fetchToken()
    }    
  })

  return (
    <div style={{width: "600px"}}>
      <h1>Parafin Elements Quickstart</h1>
      {token ? (
        <div>
          <ParafinElements
            product="flex_loan"            
            environment="production"
            token={token}
          />              
        </div> 
      ) : (
        <div>
          loading...
        </div>         
      )}
    </div>
  );
}

export default App;
