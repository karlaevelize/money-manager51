import './App.css';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deposit, reset } from "./store/balance/actions"
import {selectBalance} from "./store/balance/selector"

function App() {

  const dispatch = useDispatch()
  const balance = useSelector(selectBalance)

  console.log(balance) //check if we are getting the correct value

  const [amountValue, setAmountValue] = useState(0)

  return (
    <div className="App">
      <h2>My First App with Redux</h2>
      <h3>Currente Balance: {balance}</h3>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10</button>
      {/* using the same action the withdraw, different from the Reader */}
      <button onClick={() => dispatch(deposit(-10))}>Withdraw 10</button>
      <br/>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <input 
        type="text" 
        value={amountValue} 
        onChange={(e) => setAmountValue(e.target.value)}
      />

      <button onClick={() => {
        // using parseInt here so we don't get NaN 
        dispatch(deposit(parseInt(amountValue))); 
        setAmountValue("")}}>custom value</button>
    </div>
  );
}

export default App;
