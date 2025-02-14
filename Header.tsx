import { useState } from "react";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-gray-800 text-white flex justify-between items-center p-4 shadow-md z-50">
      <h1 className="text-2xl font-bold">MM Web</h1>
      <button 
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        New Launch
      </button>

      {isModalOpen && (
        <div className="absolute top-20 right-10 bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold">New Launch</h2>
          <input type="text" placeholder="Project Name" className="border p-2 w-full mt-2" />
          <input type="number" placeholder="Wallet Count" className="border p-2 w-full mt-2" />
          <button 
            className="bg-blue-500 px-4 py-2 rounded mt-4"
            onClick={() => setModalOpen(false)}
          >
            Confirm
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
