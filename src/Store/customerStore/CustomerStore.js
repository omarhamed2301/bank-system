const customerInitialState = {
  fullName: "",
  nationalID: "",
  isActive: false,
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/setFullName":
      return { ...state, fullName: action.payload };
    case "customer/setNationalID":
      return { ...state, nationalID: action.payload };

    case "customer/activateAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        isActive: true,
      };
    default:
      return state;
  }
}

export function setFullName(name) {
  return { type: "customer/setFullName", payload: name };
}

export function setNationalID(id) {
  return { type: "customer/setNationalID", payload: id };
}
export function activateAccount(fullName, nationalID) {
  return {
    type: "customer/activateAccount",
    payload: { fullName, nationalID },
  };
}