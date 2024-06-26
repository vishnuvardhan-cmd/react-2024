import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = "usd",
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className={`w-1-2`}>
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          type="number"
          value={amount}
          placeholder={amount}
          disabled={amountDisabled}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          className="outline-none w-full bg-transparent py-1.5"
        />
      </div>
      <div className="w-1/2 justify-end text-right flex flex-wrap">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          placeholder={selectedCurrency}
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
