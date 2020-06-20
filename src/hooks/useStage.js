import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    console.log("updateStage worked");
    const updateStage = prevStage => {
      // row단위로 스테이지의 모든 cell을 뒤지면서 "clear"인지 확인
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      // 테트리스 조각이 땅바닥에 붙었을 때 합치는 부분
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          // console.log("value, x", value, x);
          // console.log("player.pos.x, player.pos.y", player.pos.x, player.pos.y);
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [
    player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino,
    resetPlayer,
  ]);

  return [stage, setStage];
};
