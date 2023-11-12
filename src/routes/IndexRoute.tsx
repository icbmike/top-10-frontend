import React from "react"

export const IndexRoute = () => {
  return <>
    <h1>Top 10</h1>

    <a href="/newLobby">New Lobby</a>

    <div>
      <input type="text" maxLength={5} /><button>Join Lobby</button>
    </div>
  </>
}