import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [result, setResult] = useState()

  const currencyInfo = useCurrencyInfo(from) || {}
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
    setAmount();
    setResult();
  };


  const convert = () => {
    setResult(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-TWR-uFMk8AYZxPRbGCqMUjIlqSpv4iu6w&s')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                Amount={amount}
                currencyOptions={options}
                onchangeCurrency={(currency) => setFrom(currency)}
                onChangeAmount={(amount) => setAmount(amount)}
                placeholder="Amount"
                currencyType={from}


              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                Amount={result}
                currencyOptions={options}
                onchangeCurrency={(currency) => setTo(currency)}
                onChangeAmount={(amount) => setAmount(amount)}
                placeholder="Result"
                currencyType={to}

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );



}

export default App
