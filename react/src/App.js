import './App.css'
import { useState, useEffect } from 'react'
import { createHelia, libp2pDefaults } from 'helia'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { createOrbitDB } from '@orbitdb/core'

function App() {
  const [address, setAddress] = useState('')
  let loading = false
  
  useEffect(() => {
    async function loadDB() {
      const libp2pOptions = libp2pDefaults()
      libp2pOptions.services.pubsub = gossipsub()
      const ipfs = await createHelia({ libp2p: libp2pOptions })
      const orbitdb = await createOrbitDB({ ipfs })
      const db = await orbitdb.open('my-db')
      setAddress(db.address)
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
