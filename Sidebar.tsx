import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-6">MM Web</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link href="/wallet-management" className="hover:bg-gray-700 p-2 rounded">
          Wallet Management
        </Link>
        <Link href="/auto-trading" className="hover:bg-gray-700 p-2 rounded">
          Auto-Trading
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
