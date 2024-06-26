import { useState, useEffect } from "react";

function useCurrencyInfo(from) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    )
      .then((res) => {
        res.json();
      })
      .then((res) => setData(res[from]));
  }, [from]);

  return data;
}

export default useCurrencyInfo;
