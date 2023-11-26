import React, { useState } from 'react';

import { Button } from '../components/Button';
import { useDispatch } from 'react-redux';
import { createLobby } from '../redux/actions';

export const NewLobbyRoute = () => {
  const dispatch = useDispatch();
  const [lobbySize, setLobbySize] = useState(3);

  const onCreateLobbyClick = () => {
    dispatch(createLobby({ lobbySize }));
  };

  return (
    <>
      <input
        className="input"
        style={{ marginRight: '8px' }}
        type="number"
        max={20}
        min={2}
        value={lobbySize}
        onChange={(e) => setLobbySize(parseInt(e.target.value))}
      />

      <Button onClick={onCreateLobbyClick}>Create Lobby</Button>
    </>
  );
};
