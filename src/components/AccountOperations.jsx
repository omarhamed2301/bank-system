import React, { useState } from "react";
import "./AccountOperations.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  requestLoan,
  withdraw,
  loanPurpose,
  payLoan,
} from "../Store/accountStore/AccountStore";
export default function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanReason, setLoanReason] = useState("");

  const dispatch = useDispatch();
  const account = useSelector((store) => store.account);

  const handleDepositChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setDepositAmount(value);
    }
  };

  const handleWithdrawChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setWithdrawAmount(value);
    }
  };

  const handleLoanRequestChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setLoanAmount(value);
    }
  };

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(Number(depositAmount)));
    setDepositAmount("");
  }

  function handleWithdraw() {
    if (!withdrawAmount) return;
    dispatch(withdraw(Number(withdrawAmount)));
    setWithdrawAmount("");
  }

  function handleLoanRequest() {
    if (!loanAmount || !loanReason) return;
    if (account.isLoaned) {
      dispatch(requestLoan(Number(loanAmount)));
    } else {
      alert(
        "Loan request submitted. Your account will be charged with the loan amount."
      );
      dispatch(requestLoan(Number(loanAmount)));
      dispatch(loanPurpose(loanReason));
    }
    setLoanAmount("");
    setLoanReason("");
  }

  function handleLoanPayBack() {
    dispatch(payLoan());
  }

  return (
    <div className="accountOperations">
      <h4 className="mb-2">What would you like to do next?</h4>
      <div className="operations">
        <div className="deposit">
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={handleDepositChange}
          />
          <button onClick={handleDeposit}>DEPOSIT</button>
        </div>
        <div className="withdraw">
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={handleWithdrawChange}
          />
          <p style={{color:'red'}}>{account.withdrawError}</p>
          <button onClick={handleWithdraw}>WITHDRAW</button>
        </div>
        <div className="requestLoan">
          <label>Request Loan</label>
          <input
            type="number"
            placeholder="Loan amount"
            value={loanAmount}
            onChange={handleLoanRequestChange}
          />
          <input
            type="text"
            placeholder="Loan Reason"
            value={loanReason}
            onChange={(e) => setLoanReason(e.target.value)}
          />
          <button onClick={handleLoanRequest}>REQUEST LOAN</button>
        </div>
        {account.isLoaned && (
          <div className="loanPayBack">
            <label>Pay Back {account.loan}$</label>
            <button onClick={handleLoanPayBack}>
              PAYBACK
            </button>
            <span >
              {account.isLoaned
                ? `Reason of the loan: ${account.reasonToLoan}`
                : ""}
            </span>
            <span style={{ color: "red", fontWeight: "bold" }}>
              {account.isLoaned ? account.newError : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
