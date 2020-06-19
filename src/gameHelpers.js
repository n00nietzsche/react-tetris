export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const createStage = () =>
  Array(STAGE_HEIGHT).fill(new Array(STAGE_WIDTH).fill([0, "clear"]));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on an actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // We shouldn't go through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};

/* 
  Array.from() 메서드는 유사 배열 객체(array-like object)나반복 가능한 객체(iterable object)를 얕게 복사해새로운Array 객체를 만듭니다.
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from

  Array(Number) makes empty array as many as Number's number
*/

/*
  -> these two might be equal

  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
  
  Array(STAGE_HEIGHT).fill(new Array(STAGE_WIDTH).fill([0, 'clear']));
*/
