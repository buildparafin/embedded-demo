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
    const isDevEnvironment = true;

    const fetchToken = async () => {
      // Replace with your own Person ID. It should begin with "person_".
      const personId = "<your-person-id>";

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

  const onOptIn = async () => ({
    businessExternalId: "<your-external-business-id>",
    legalBusinessName: "Hearty Kitchens LLC",
    dbaName: "Hearty Kitchens",
    ownerFirstName: "Ralph",
    ownerLastName: "Furman",
    accountManagers: [
      {
        name: "Vineet Goel",
        email: "test1@parafin.com",
      },
    ],
    routingNumber: "121141822",
    accountNumberLastFour: "6789",
    bankAccountCurrencyCode: "USD",
    email: "test2@parafin.com",
    phoneNumber: "2026331000",
    address: {
      addressLine1: "301 Howard St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94105",
      country: "USA",
    },
  });

  if (!token) {
    return <LoadingShell>loading...</LoadingShell>;
  }

  return (
    <div>
      <Header />
      <ContentShell>
        <SideNav onClick={(newProduct) => setTab(newProduct)} />
        {tab === "capital" && (
          <PageShell>
            <ParafinWidget
              token={token}
              product="capital"
              // Optional props below, see docs.parafin.com for more information
              externalBusinessId={undefined}
              onOptIn={onOptIn}
              // For demo purposes only. Do not use in your integration.
              widgetUrlOverride="https://embedded-demo-widget.vercel.app"
              dashboardUrlOverride="https://embedded-demo-app.vercel.app"
            />
          </PageShell>
        )}
        {tab === "analytics" && (
          <PageShell>
            <h2>Analytics</h2>
          </PageShell>
        )}
        {tab === "payouts" && (
          <PageShell>
            <h2>Payouts</h2>
          </PageShell>
        )}
      </ContentShell>
    </div>
  );
}

export default App;

const ContentShell = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoadingShell = styled.div`
  padding: 20px;
`;

const PageShell = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  max-width: 1100px;
`;
