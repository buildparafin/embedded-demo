import { useContext } from "react";

import Login from "./components/Login";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
// import { UserContext } from "./components/UserProvider";


function App() {
  // const { username } = useContext(UserContext);

  return (
    <div>
      <Header />
      <Dashboard />

      {/* use below if you want to build in login */}
      {/* {username ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <Login />
      )}       */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
