import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers"; // to restart game

// Styled Components
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render");

  const movePlayer = dir => {
    console.log("movePlayer");

    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    console.log("move worked");
    if (!gameOver) {
      // Arrow Left
      if (keyCode === 37) {
        movePlayer(-1);
        // Arrow Right
      } else if (keyCode === 39) {
        movePlayer(1);
        // Arrow Down
      } else if (keyCode === 40) {
        dropPlayer();
        // Arrow Up
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    /* 
      role attribute에 관한 내용
      일반적으로 웹 접근성을 위해 역할을 부여, HTML5 요소임

      https://webdir.tistory.com/89 
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role

      tab index에 관한 내용
      해당 요소에 포커스가 가능한지를 결정하는 여부임
      탭의 순서를 결정할 수도 있긴 한데, 권장되는 것은 아님. 엘리먼트를 순서대로 위치시키는 것이 권장됨      

      https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex
    */
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="점수" />
              <Display text="다음 블록" />
              <Display text="단계" />
            </div>
          )}
          <StartButton callback={startGame} />
          {/* 
            ERROR LOG : onClick 내부에 그냥 함수를 넣어서 infinite loop 에러 발생했었음
            그 이유는 startgame 내부에 리랜더링하는 함수가 있었고, setState(...)
            onClick 내부에 함수 이름과 같이 'startGame'을 넣은게 아니라 'startGame()' 형태로 넣어서
            리액트가 함수가 실행된 결과를 onClick에 넣으려 했고, 함수 실행 중 계속 setState가 발생했으므로
            거기서 무한 리랜더링(infinite loop error)가 발생함 
          */}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
