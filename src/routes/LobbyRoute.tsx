import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loadLobby } from "../redux/actions";
import { selectIsLobbyLoading } from "../redux/selectors";
import { Loader } from "../components/Loader";

export const LobbyRoute = () => {
  const dispatch = useDispatch();
  const { lobbyCode } = useParams();

  const isLobbyLoading = useSelector(selectIsLobbyLoading);

  useEffect(() => {
    dispatch(loadLobby({ lobbyCode }))
  }, [dispatch, lobbyCode]);

  return isLobbyLoading ? <Loader /> : (<span>lobby {lobbyCode}</span>);
};