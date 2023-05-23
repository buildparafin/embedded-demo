import { useEffect, useState } from "react";
import axios from 'axios'
import { ParafinElements, ParafinButton } from "@parafin/react-parafin-elements";


function App() {
  const [token, setToken] = useState(null)
  const [state, setState] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      
    /** Note: You must grab a business Id to pass to the "/parafin/token" endpoint
        If you don't have a business yet, create a new test business with
        the curl command below.

        curl -XPOST  https://api.dev.parafin.com/business \
          -u you_client_id:you_client_secret \
          -d '{"business_external_id": "yourBusinessId"}'           
     *
     **/
      const businessId = "123456789"
      
      // fetch Parafin token from server
      const response = await axios.get(`/parafin/token/${businessId}`) 
      setToken(response.data.token)
    }

    if(!token) {
      fetchToken()
    }    
  })

  const onExit = (state) => {
    console.log(state);
    setState(state)
    alert(state)
  }

  return (
    <div style={{width: "600px"}}>
      <h1>Parafin Elements Quickstart</h1>
      {token ? (
        <div>
          <ParafinElements
            product="merchant_cash_advance"
            token={token}
            environment="development"
          />

          <ParafinButton token={token} environment="development" onExit={setState} 
            style={{
              backgroundColor: "#000000"
            }}
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


// curl https://api.dev.parafin.com/business \
//   -u 9192abaf-47be-4187-8d08-5d4fd9261fa3:tAAVUyyKgoBg7ENdd4fhwUnoMASAkZdVuJBdfE0chi3XyPXjKbvFx9dvdruKKfCx \
//   -d '{
//     "business_external_id": "123456789"
//   }' 





