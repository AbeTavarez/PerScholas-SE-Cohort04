import { Link } from "react-router-dom";

function Currencies() {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
        {/* map over the currencies array and render a Link component for each coin object */}
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
            // create a Link with a path to the price page using the symbol from the coin
          <Link to={`/price/${symbol}`} key={symbol}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Currencies;
