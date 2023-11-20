import React, { useState } from 'react';

import { Button } from '../components/Button';

export const NewLobbyRoute = () => {
  const [lobbySize, setLobbySize] = useState(3);
  const onCreateLobbyClick = () => {

  };

  return <>
    <input className="input" 
      style={{ marginRight: '8px' }} 
      type="number" 
      max={20} 
      min={2} value={lobbySize} 
      onChange={e => setLobbySize(parseInt(e.target.value))} />
    <Button onClick={onCreateLobbyClick}>Create Lobby</Button>
  </>;
};
