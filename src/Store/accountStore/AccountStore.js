const accountInitialState = {
  balance: 0,
  loan: 0,
  isLoaned: false,
  reasonToLoan: "",
  newError: "",
  withdrawError: "",
};
export default function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: Number(state.balance) + Number(action.payload) };
    case "account/withdraw":
      if (Number(action.payload) > state.balance) return {...state, withdrawError:"You don't have that amount to withdraw."}
      return { ...state, balance: state.balance - action.payload, withdrawError:""};
    case "account/requestLoan":
      if (state.isLoaned === true) return {...state, newError: "You have already requested a loan before."};
      return {
        ...state,
        balance: Number(state.balance) + Number(action.payload),
        loan: action.payload,
        isLoaned: true,
      };
      case "account/loanReason":
      return {
        ...state,
        reasonToLoan: action.payload,
        isLoaned: true,
      };
    case "account/payLoan":
      if (state.balance < state.loan) return { ...state, newError:"Your balance isn't enough to pay the loan."};
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        isLoaned: false,
      };
    
    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount) {
  return { type: "account/requestLoan", payload:  amount  };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
export function loanPurpose(reason){
    return { type: "account/loanReason", payload: reason };
}
