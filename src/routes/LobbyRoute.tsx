import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadLobby } from '../redux/actions';
import {
  selectIsLobbyLoading,
  selectLobby,
  selectPlayer,
} from '../redux/selectors';
import { Loader } from '../components/Loader';

export const LobbyRoute = () => {
  const dispatch = useDispatch();
  const { lobbyCode } = useParams();

  const isLobbyLoading = useSelector(selectIsLobbyLoading);
  const lobby = useSelector(selectLobby);
  const player = useSelector(selectPlayer);

  useEffect(() => {
    if (lobbyCode) {
      dispatch(loadLobby({ lobbyCode }));
    }
  }, [dispatch, lobbyCode]);

  return (
    <>
      <h2>Lobby {lobbyCode}</h2>
      {isLobbyLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : null}
    </>
  );
};
