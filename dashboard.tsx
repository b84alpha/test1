import Sidebar from "../components/ui/Sidebar";
import Header from "../components/ui/Header";
import { useState } from "react";

const Dashboard = () => {
  const wallets = [
    { id: "Wallet 1", sol: 2.5, tokens: 10000 },
    { id: "Wallet 2", sol: 1.3, tokens: 5000 },
    { id: "Wallet 3", sol: 3.1, tokens: 8000 },
    { id: "Wallet 4", sol: 0.2, tokens: 3000 },
    { id: "Wallet 5", sol: 4.5, tokens: 12000 },
  ];

  const totalSupply = wallets.reduce((acc, w) => acc + w.tokens, 0);

  const [selectedWallets, setSelectedWallets] = useState<string[]>([]);
  const [tradeMethod, setTradeMethod] = useState("market");
  const [tradeAmount, setTradeAmount] = useState<number>(1);
  const [marketCap, setMarketCap] = useState<number>(0);
  const [liquidity, setLiquidity] = useState<number>(120);
  const [buyPressure, setBuyPressure] = useState<number>(15);
  const [sellPressure, setSellPressure] = useState<number>(10);
  const [limitOrders, setLimitOrders] = useState<{ wallet: string; amount: number; marketCap?: number }[]>([]);

  // Wallet Selection Filters
  const selectTopHolders = () => {
    const topWallets = [...wallets].sort((a, b) => b.tokens - a.tokens).slice(0, 10);
    setSelectedWallets(topWallets.map((w) => w.id));
  };

  const selectTokenHolders = () => {
    const tokenWallets = wallets.filter((w) => w.tokens > 10000);
    setSelectedWallets(tokenWallets.map((w) => w.id));
  };

  // Trade Execution
  const executeTrade = () => {
    console.log("Executing trade for", selectedWallets, "Trade Amount:", tradeAmount);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64 mt-16 p-6">
        <Header />

        {/* Market Metrics */}
        <div className="grid grid-cols-6 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">TS (Total Summary)</h3>
            <p className="text-2xl font-semibold">◎ 12.34 SOL / 150,000 XYZ</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">PnL</h3>
            <p className="text-2xl font-semibold">◎ 5.67 SOL</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">Current MC</h3>
            <p className="text-2xl font-semibold">$2,340,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">Total Volume</h3>
            <p className="text-2xl font-semibold">$1,500,000</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-green-600">Buy Pressure (5 min)</h3>
            <p className="text-2xl font-bold">{buyPressure}%</p>
          </div>
          <div className="bg-red-100 p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-red-600">Sell Pressure (5 min)</h3>
            <p className="text-2xl font-bold">{sellPressure}%</p>
          </div>
        </div>

        {/* Trading Panel */}
        <div className="p-6 bg-white rounded-lg shadow-lg flex">
          {/* Wallets List */}
          <div className="w-1/3 p-4 border rounded bg-gray-50">
            <h3 className="text-lg font-bold mb-3">Wallets</h3>
            {wallets.map((wallet) => (
              <label key={wallet.id} className="flex items-center gap-3 mb-2">
                <input
                  type="checkbox"
                  checked={selectedWallets.includes(wallet.id)}
                  onChange={() =>
                    setSelectedWallets(
                      selectedWallets.includes(wallet.id)
                        ? selectedWallets.filter((id) => id !== wallet.id)
                        : [...selectedWallets, wallet.id]
                    )
                  }
                />
                <span>
                  {wallet.id} - ◎ {wallet.sol.toFixed(2)} / {wallet.tokens} XYZ
                </span>
              </label>
            ))}
          </div>

          {/* Trade Execution */}
          <div className="w-2/3 ml-6">
            <h2 className="text-2xl font-bold mb-4">Trade Execution</h2>

            {/* Trade Method */}
            <label className="block font-bold">Trade Method</label>
            <select className="border rounded w-full p-2 mb-4" value={tradeMethod} onChange={(e) => setTradeMethod(e.target.value)}>
              <option value="market">Market</option>
              <option value="limit">Limit Order</option>
            </select>

            {/* Trade Amount */}
            <label className="block font-bold">Trade Amount (SOL)</label>
            <input type="number" className="border rounded w-full p-2 mb-4" value={tradeAmount} onChange={(e) => setTradeAmount(parseFloat(e.target.value))} />

            {/* Market Cap for Limit Order */}
            {tradeMethod === "limit" && (
              <>
                <label className="block font-bold">Market Cap for Limit Order</label>
                <input type="number" className="border rounded w-full p-2 mb-4" value={marketCap} onChange={(e) => setMarketCap(parseFloat(e.target.value))} />
              </>
            )}

            <button className="bg-green-500 text-white px-6 py-2 rounded-lg" onClick={executeTrade}>Execute Trade</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
