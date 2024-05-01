import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ParafinWidget } from "@parafin/react";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      // Replace with your own Person ID. It should begin with "person_".
      const personId = "<your-person-id>";

      // Change to false to use production or sandbox production environment
      const isDevEnvironment = true;

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

  return (
    <div>
      <Header>
        <h1>Parafin Widget Quickstart</h1>
      </Header>
      {token ? (
        <WidgetContainer>
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
          <ParafinWidget
            token={token}
            product="wallet"
            // Optional props below, see docs.parafin.com for more information
            externalBusinessId={undefined}
            onOptIn={onOptIn}
            // For demo purposes only. Do not use in your integration.
            widgetUrlOverride="https://embedded-demo-widget.vercel.app"
            dashboardUrlOverride="https://embedded-demo-app.vercel.app"
          />
        </WidgetContainer>
      ) : (
        <Shell>loading...</Shell>
      )}
    </div>
  );
}

export default App;

const Header = styled.div`
  height: 120px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Shell = styled.div`
  padding: 20px;
`;

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
`;
