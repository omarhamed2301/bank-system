import React from "react";
import { useSelector } from "react-redux";

export default function UseReducerBank() {
    const customer = useSelector((store) => store.customer)
  return (
    <>
      <h1>useReducer Bank Account Test {customer.fullName}</h1>
      <p>Balance: </p>
      <p>Loan: </p>

      <p>
        <button>Open account</button>
      </p>
      <p>
        <button>Deposit 150</button>
      </p>
      <p>
        <button>Withdraw 50</button>
      </p>
      <p>
        <button>Request a loan of 5000</button>
      </p>
      <p>
        <button>Pay loan</button>
      </p>
      <p>
        <button>Close account</button>
      </p>
    </>
  );
}
