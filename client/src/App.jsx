import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {

    const fetchMessage = async () =>{
      try{
        const res = await fetch('/api/health');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setMsg(data.message);
      }
      catch{
        console.error('Error fetching health message:', err);
        setMsg('Error fetching message');
      }
    };
    
    fetchMessage();
    
  }, []);

  return (
  <h1>{msg}</h1>
  );
}

export default App;
