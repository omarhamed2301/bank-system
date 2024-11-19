import React, { useState } from "react";
import "./CreateCustomer.css";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount } from "../Store/customerStore/CustomerStore";
export default function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const dispatch = useDispatch();
  function addNewCustomer(e) {
    e.preventDefault();
    if (!fullName || !nationalID) return;
    dispatch(activateAccount(fullName, nationalID));
    setFullName("");
    setNationalID("");
  }
  const account = useSelector((store) => store.account);
  return (
    <div className="createCustomer">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-7">
          <h2>Create an account</h2>
        </div>
        <div className="col-lg-5" style={{ opacity:'0' }}>
          
          <div className="balance-display">
            <span>BALANCE:</span>
            <span>${Number(account.balance)}</span>
          </div>
        </div>
      </div>
      <form onSubmit={addNewCustomer}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>National ID:</label>
          <input
            type="number"
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
          />
        </div>
        <button type="submit" className=" w-100">Submit</button>
      </form>
    </div>
  );
}
