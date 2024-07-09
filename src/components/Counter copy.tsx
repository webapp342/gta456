import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram: any;
  }
}

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const initData = window.Telegram.WebApp.initDataUnsafe;
    const user = initData?.user;
    
    if (user) {
      setUsername(user.username);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1>Welcome to Telegram Mini App</h1>
      {username ? (
        <p>Your Telegram username: <strong>{username}</strong></p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center' as 'center',
    marginTop: '20vh',
  }
};

export default App;
