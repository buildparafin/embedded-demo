import { useEffect, useState, useCallback } from "react";
import axios from 'axios'
import { ParafinElements } from "@parafin/react-parafin-elements";


function App() {
  const [token, setToken] = useState(null)
  const [state, setState] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      
      // replace with your person ID
      const personId = "person_xxx"

      
      // fetch Parafin token from server
      const response = await axios.get(`/parafin/token/${personId}`) 
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
            product="capital"            
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
