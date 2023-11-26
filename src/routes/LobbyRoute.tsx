import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { joinLobby, loadLobby } from '../redux/actions';
import {
  selectIsJoiningLobby,
  selectIsLobbyLoading,
  selectLobby,
  selectPlayer,
} from '../redux/selectors';
import { Loader } from '../components/Loader';
import { Button } from '../components/Button';

export const LobbyRoute = () => {
  const dispatch = useDispatch();
  const { lobbyCode } = useParams();

  const [name, setName] = useState('');
  const isLobbyLoading = useSelector(selectIsLobbyLoading);
  const isJoiningLobby = useSelector(selectIsJoiningLobby);
  const lobby = useSelector(selectLobby);
  const player = useSelector(selectPlayer);

  useEffect(() => {
    if (lobbyCode) {
      dispatch(loadLobby({ lobbyCode }));
    }
  }, [dispatch, lobbyCode]);

  const onJoinLobbyClick = () => {
    dispatch(joinLobby({ lobbyCode: lobbyCode!, name }));
  };

  if (isLobbyLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  }

  if (!lobby) {
    return (
      <>
        <h2>Lobby not found</h2>
        <Button href="/">Go home</Button>
      </>
    );
  }

  const playersOrAtLimit = () => {
    if (lobby.players.length >= lobby.lobbySize!) {
      return <p>Lobby is full</p>;
    }

    if (player) {
      return null;
    }

    if (isJoiningLobby) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      );
    }

    return (
      <>
        <input
          className="input"
          style={{ marginRight: '8px', marginBottom: '8px' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={onJoinLobbyClick}>Join Lobby</Button>
      </>
    );
  };

  return (
    <>
      <h2>Lobby {lobbyCode}</h2>

      <ul style={{ marginBottom: '20px' }}>
        {lobby.players.map((p) => (
          <li key={p.id}>
            {p.id === player?.id ? '*' : ''} {p.name}
          </li>
        ))}
      </ul>

      {playersOrAtLimit()}
    </>
  );
};
