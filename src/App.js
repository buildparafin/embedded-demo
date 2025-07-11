import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ParafinWidget } from "@parafin/react";
import { Header } from "./components/Header.tsx";
import { SideNav } from "./components/SideNav.tsx";

function App() {
  const [token, setToken] = useState(null);
  const [tab, setTab] = useState("capital");

  useEffect(() => {
    // Change to false to use production or sandbox production environment
    const isDevEnvironment = false;

    const fetchToken = async () => {
      // Replace with your own Person ID. It should begin with "person_".
      const personId = "person_02a5e699-979c-45b5-8775-764620dc0d72"
      // Fetch Parafin token from server
      const response = await axios.get(
        `/parafin/token/${personId}/${isDevEnvironment}`
      );
      setToken(response.data.parafinToken);
    };

    if (!token) {
      fetchToken();
    }
  });

  if (!token) {
    return <LoadingShell>loading...</LoadingShell>;
  }

  return (
    <ParafinWidget
      token={token}
      product="capital"
      onEvent={(eventType) => console.log('Event:', eventType)}
     onExit={() => console.log('exited')}
    />
  );
}

export default App;

const LoadingShell = styled.div`
  padding: 20px;
`;