import './App.css';
import { useState, useEffect } from 'react';
import { create } from 'ipfs-core';
import { createOrbitDB } from '@orbitdb/core';

function App() {
  const [address, setAddress] = useState('');

  useEffect(() => {
    async function getAddress() {
      const ipfs = await create({repo: 'ok' + Math.random()});
      const orbitdb = await createOrbitDB({ ipfs });
      const db = await orbitdb.open('my-db')
      setAddress(db.address);
      await db.close()
      await ipfs.stop()
    }
    
    getAddress()
  }, []);
  
  return (
    <div className="App">
      Address: {address}
    </div>
  );
}

export default App;
