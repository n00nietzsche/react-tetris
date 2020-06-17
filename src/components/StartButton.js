import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

/* 
ERROR LOG: 대소문자
리액트에서는 onclick 대신 항상 onClick으로 사용해주어야 함 
*/

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
