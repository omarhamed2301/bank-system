import { useSelector } from "react-redux";
import "./App.css";
import AccountOperations from "./components/AccountOperations";
import CreateCustomer from "./components/CreateCustomer";
import WelcomeUser from "./components/WelcomeUser";

function App() {
  // Call useSelector hooks at the top level, not inside the conditional blocks
  const { fullName, isActive } = useSelector((store) => store.customer);
  const balance = useSelector((store) => store.account.balance);

  return (
    <div className="App">
      <div className="container">
        {!isActive ? ( // Check if customer is active
          <>
            <h1 className="text-center" style={{marginBottom:'100px'}}>Redux Bank System</h1>
            <CreateCustomer />
          </>
        ) : (
          <>
            <WelcomeUser />

            <div className="balance-display">
              <span style={{ marginRight: "10px" }}>BALANCE:</span>
              <span>${Number(balance)}</span>
            </div>
            <AccountOperations />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
