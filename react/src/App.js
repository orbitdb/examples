import './App.css';
import { useState, useEffect } from 'react';
import { create } from 'ipfs-core';
import { createOrbitDB } from '@orbitdb/core';

function App() {
  const [address, setAddress] = useState('');
  let loading = false;
  
  useEffect(() => {
    async function loadDB() {
      const ipfs = await create({repo: 'orbitdb-examples-react'});
      const orbitdb = await createOrbitDB({ ipfs });
      const db = await orbitdb.open('my-db')
      setAddress(db.address);
      await db.close()
      await ipfs.stop()
    }
    
    if (!loading) {
      loading = true
      loadDB()
    }
  }, []);
  
  return (
    <div className="App">
      Address: {address}
    </div>
  );
}

export default App;
