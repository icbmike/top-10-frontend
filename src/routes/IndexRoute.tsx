import React, { useState } from "react"
import { navigate } from "../App";

export const IndexRoute = () => {

  const [lobbyCode, setLobbyCode] = useState('');

  const onJoinLobbyClick = () => {
    navigate(`/lobby/${lobbyCode}`);
  };

  return <>
    <h1>Top 10</h1>

    <a href="/newLobby">New Lobby</a>

    <div>
      <input type="text" maxLength={5} value={lobbyCode} onChange={e => setLobbyCode(e.target.value)} /><button onClick={onJoinLobbyClick}>Join Lobby</button>
    </div>
  </>
}