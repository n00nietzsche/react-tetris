import { useState, useCallback } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    console.log("updatePlayerPos x, y, collided", x, y, collided);
    /*
    setState(prev => {}) 을 이용해서 이전에 있던 값을 이용 가능
     */
    setPlayer(prev => {
      console.log("prev", prev);
      return {
        ...prev,
        pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
        collided,
      };
    });
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
