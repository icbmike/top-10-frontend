import React, { useState } from 'react';
import { navigate } from '../App';
import { Button } from '../components/Button';

export const IndexRoute = () => {

  const [lobbyCode, setLobbyCode] = useState('');

  const onJoinLobbyClick = () => {
    navigate(`/lobby/${lobbyCode}`);
  };

  const onLobbyChange = (val: string) => {
    const newVal = val.toUpperCase().replace(/[^A-Z0-9]/, '');

    setLobbyCode(newVal);
  };

  return <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}>
    <Button href="/newLobby" style={{ marginBottom: '8px' }}>New Lobby</Button>

    <span>
      <input
        type="text"
        maxLength={5}

        style={{ marginRight: '8px', width: '100px', textAlign: 'center' }}
        value={lobbyCode}
        onChange={e => onLobbyChange(e.target.value)} />

      <Button onClick={onJoinLobbyClick}>Join Lobby</Button>
    </span>
  </div>;
};
