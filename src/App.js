import { useEffect, useState } from "react";
import axios from 'axios'
import { ParafinElements } from "@parafin/react-parafin-elements";


function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      
    /** Note: You must grab a businessId to pass to the /parafin/token endpoint
        If you don't have a business yet, create a new test business with
        the curl command below.

        curl -XPOST  https://api.dev.parafin.com/business \
          -u you_client_id:you_client_secret \
          -d '{"business_external_id": "myExternalId"}'           
     *
     **/
      const businessId = "your-business-id"
      // const businessId =  "myExternalId" 
      
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
        <ParafinElements
          token={token}
          environment="development"
          style={{
            accent: "#3b71ca",
            borderRadius: "8px",
          }}
        />
      ) : (
        <div>
          loading...
        </div>         
      )}
    </div>
  );
}

export default App;
