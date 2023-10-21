// App.js
import React, { useState } from 'react';
import ConnectButton from './components/ConnectButton';
import CardList from './components/CardList';
import Sudoku90s from './components/Sudoku90s';

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
    } else {
      alert('MetaMask is not installed!');
    }
  };

  return (
    <div>
      {!account ? <ConnectButton onClick={connectWallet} /> : <Sudoku90s />}
    </div>
  );
}

export default App;
